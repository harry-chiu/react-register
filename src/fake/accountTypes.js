import React from 'react';
import {
  DoctorSvg,
  PatientSvg,
} from '../images';

const style = {
  width: '100%',
  height: '100%',
};

export default [
  {
    id: 1,
    type: 'doctor',
    icon: <DoctorSvg style={style} />,
  },
  {
    id: 2,
    type: 'patient',
    icon: <PatientSvg style={style} />,
  },
];
