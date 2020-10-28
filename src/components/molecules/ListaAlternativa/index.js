import React, { useState } from 'react';
import { Alert } from 'react-native';
import ItemQuestion from '../ItemQuestion';

import { ListView } from './styles';

export default ({
  data,
  infoAlternativa,
  questaoRespondida,
  handleSubmit,
  showAwnser,
  resposta,
}) => {
  const [selected, setSelected] = useState(false);

  const mostrarResposta = item => {
    // /Alert.alert(`${item.id}`);
    // /Alert.alert(JSON.stringify(infoAlternativa));
    // console.log(`

    // infoAlternativa ----> ${JSON.stringify(infoAlternativa)}
    // --
    // Questao respondidade ----> ${questaoRespondida}
    // --
    // Alternativa ITEM ----> ${JSON.stringify(item)}

    // `);
    console.log(item);
    if (resposta !== null) {
      if (questaoRespondida !== null) {
        // if (item.isVerdadeiro) {
        //   return 'green';
        // }

        if (item.isVerdadeiro) {
          return 'green';
        }
        if (resposta.alternativaId === item.id) {
          if (item.isVerdadeiro) {
            return 'green';
          }
          return 'red';
        }

        // / if (item.selected) {
        //   return 'red';
        // }
      }
    }
    return '#ffffff00';
  };

  const listItem = data.map(item => (
    <ItemQuestion
      bgColor={mostrarResposta(item)}
      handleClick={() => {
        if (resposta === null) {
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
        }
      }}
      text={item.text}
      actived={item.selected}
    />
  ));

  return listItem;
};
