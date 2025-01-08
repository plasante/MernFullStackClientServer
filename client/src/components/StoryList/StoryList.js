import React from 'react';
import {Row, Col, Spin} from "antd";
import Story from "../Story";
import {useSelector} from "react-redux";

const StoryList = () => {

  const stories = useSelector(state => state.stories);

  console.log('stories from tne store: ', stories);

  return !stories.length ?
    <div>
      <Spin style={{textAlign: "center"}} size="large"></Spin>
    </div> :
    (
      <Row gutter={[48, 32]}>
        {
          stories.map((story, index) =>
            <Col key={index} lg={24} xl={12} xxl={8}>
              <Story story={story} />
            </Col>
          )
        }
      </Row>
    )
};

export default StoryList;