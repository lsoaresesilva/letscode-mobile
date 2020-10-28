import React, { useState } from 'react';
import ItemQuestion from '../../molecules/ItemQuestion';

import { ListView } from './styles';

export default ({ data, questaoRespondida, handleSubmit, showAwnser }) => {
  const [selected, setSelected] = useState(false);

  const listItem = data.map(item => (
    <ItemQuestion
      bgColor="red"
      handleClick={() => {
        handleSubmit(item);
        setSelected(true);
        data.map(questionItem => {
          if (questionItem.selected) {
            questionItem.selected = false;
            return questionItem;
          }
          if (questionItem.id === item.id) {
            questionItem.selected = true;
            return questionItem;
          }
          return item;
        });
      }}
      correct={showAwnser && item.isVerdadeiro}
      cor={() => {
        if (showAwnser && item.selected) {
          if (item.isVerdadeiro) {
            return 'green';
          }
          return 'red';
        }

        return 'gray';
      }}
      text={item.text}
      actived={item.selected}
    />
  ));

  return listItem;
};
