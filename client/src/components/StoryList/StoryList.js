import React, {useEffect} from 'react';
import {Row, Col, Spin} from "antd";
import Story from "../Story";
import {useDispatch, useSelector} from "react-redux";
import {getStories} from "../../actions/stories";

const StoryList = ({ setSelectedId }) => {

  const stories = useSelector(state => state.stories);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Mounting StoryList");
    dispatch(getStories());
  }, [dispatch]);

  return !stories.length ?
    <div>
      <Spin style={{textAlign: "center"}} size="large"></Spin>
    </div> :
    (
      <Row gutter={[48, 32]}>
        {
          stories.map((story, index) =>
            <Col key={index} lg={24} xl={12} xxl={8}>
              <Story setSelectedId={setSelectedId} story={story} />
            </Col>
          )
        }
      </Row>
    )
};

export default StoryList;