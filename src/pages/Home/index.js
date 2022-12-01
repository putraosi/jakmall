import {_} from 'lodash';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Container, Header, ItemList, List, Loading} from '../../components';
import {hideLoading, showLoading} from '../../redux';
import {Api} from '../../services';
import {ToastAlert} from '../../utils';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const refFlatlist = useRef(null);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const res = await Api.get({
        url: 'categories',
      });

      getCategoriesDetails(res?.categories);
    } catch (error) {
      setLoading(false);
      setRefresh(false);
    }
  };

  const getCategoriesDetails = async categories => {
    if (!categories) {
      setLoading(false);
      setRefresh(false);
      return;
    }

    const newData = [];

    try {
      for (const key in categories) {
        if (Object.hasOwnProperty.call(categories, key)) {
          const category = categories[key];

          const res = await Api.get({
            url: `joke/${category}`,
            params: {
              type: 'single',
              amount: 2,
            },
          });

          if (!res?.error) {
            newData[key] = {
              id: parseInt(key) + 1,
              title: category,
              show: false,
              child: res?.jokes,
            };
          }
        }
      }

      setData(newData);
      setLoading(false);
      setRefresh(false);
    } catch (error) {
      setLoading(false);
      setRefresh(false);
    }
  };

  const onCollapseExpand = position => {
    let newData = _.clone(data);
    const index = newData.findIndex(item => item.id === position);
    if (data[index].show) {
      newData[index].show = false;
    } else {
      newData = onReset();
      const index = newData.findIndex(item => item.id === position);

      newData[index].show = true;
    }

    setData(newData);
  };

  const onReset = isSet => {
    const cloneData = _.clone(data);
    const newData = [];

    for (const key in cloneData) {
      if (Object.hasOwnProperty.call(cloneData, key)) {
        const element = cloneData[key];
        element.show = false;
        newData[key] = element;
      }
    }

    if (isSet) {
      setData(newData);
      refFlatlist?.current?.scrollToIndex({animated: true, index: 0});
      return;
    }

    return newData;
  };

  const onAddMore = async position => {
    let select = data[position];
    let cloneData = _.clone(data);

    dispatch(showLoading());
    try {
      const res = await Api.get({
        url: `joke/${select.title}`,
        params: {type: 'single'},
      });

      if (!res?.error) {
        cloneData[position].child = [...select.child, res];
      }

      dispatch(hideLoading());
      setData(cloneData);
    } catch (error) {
      dispatch(hideLoading());
      ToastAlert(error.message);
    }
  };

  return (
    <Container>
      <Header title={'My Applications'} />

      {loading ? (
        <Loading />
      ) : (
        <List
          ref={refFlatlist}
          data={data}
          refreshing={refresh}
          onRefresh={() => {
            setRefresh(true);
            getCategories();
          }}
          renderItem={({item, index}) => (
            <ItemList
              data={item}
              position={index + 1}
              onPress={() => onCollapseExpand(item.id)}
              onReset={() => onReset(true)}
              onAddMore={() => onAddMore(index)}
            />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
