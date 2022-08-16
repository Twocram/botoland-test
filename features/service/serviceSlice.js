import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [
    {
      type: 'Установка лицензионной Windows (ОС Windows в стоимость не входит)',
      options: [
        {
          id: 1,
          name: 'Выезд мастера для установки Windows (ОС Windows в стоимость не входит) ',
          prices: {
            price: 600,
            currency: 'руб',
          },
          selected: false,
        },
        {
          id: 2,
          name: 'Выезд мастера для установки Windows (ОС Windows в стоимость не входит) ',
          prices: {
            price: 600,
            currency: 'руб',
          },
          selected: false,
        },
      ],
    },
    {
      type: 'Windows 10 на выбор',
      options: [
        {
          id: 4,
          name: 'Операционная система Windows 10 Домашняя 32/64-bit на 1ПК (ESD - электронная лицензия в конверте, все языки) (KW9-00265)',
          prices: {
            price: 600,
            currency: 'руб',
          },
          selected: false,
        },
      ],
    },
    {
      type: 'Установка лицензионной Windows (ОС Windows в стоимость не входит)',
      options: [
        {
          id: 1,
          name: 'Выезд мастера для установки Windows (ОС Windows в стоимость не входит) ',
          prices: {
            price: 600,
            currency: 'руб',
          },
          selected: false,
        },
        {
          id: 2,
          name: 'Выезд мастера для установки Windows (ОС Windows в стоимость не входит) ',
          prices: {
            price: 600,
            currency: 'руб',
          },
          selected: false,
        },
      ],
    },
  ],
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    checker: (state, action) => {
      const input = document.getElementById(`${action.payload}`).checked;

      if (input) {
        state.services[action.payload].options[0].selected =
          !state.services[action.payload].options[0].selected;
      }

      if (input === false) {
        state.services[action.payload].options.forEach((option) => {
          option.selected = false;
        });
      }
    },
    changeRadio: (state, action) => {
      state.services[action.payload[0]].options.forEach((option) => {
        option.selected = false;
      });
      state.services[action.payload[0]].options[
        action.payload[1]
      ].selected = true;

      const input = document.getElementById(`${action.payload[0]}`);
      input.checked = true;
    },
  },
});

export const { checker, changeRadio } = serviceSlice.actions;
export default serviceSlice.reducer;
