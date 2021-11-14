import React, { useEffect, useState } from 'react';
import { DiceValue } from '../types';

export interface DiceProps {
  size: number;
}

export interface DiceState {}


const animalMap: DiceValue[] =
  [
    {animal: "unicorn", name: "tommy"} as DiceValue,
    {animal: "bear", name: "nam"} as DiceValue,
    {animal: "dog", name: "david"} as DiceValue
  ];

export function Dice(props: DiceProps) {
  const [value, setValue] = useState<DiceValue[]>([]);
  const roll = () => {
    const newValues = Array(props.size).fill({name: "default", animal:"default"} as DiceValue).map(() => {
      return animalMap[Math.floor(Math.random() * animalMap.length)];
    });

    setValue(newValues);
  };

  useEffect(() => {
    if (!(value.every(e => e.animal === value[0].animal))) {
      setTimeout(() => {
        roll();
      }, 2000);
    }
  });

  return (
    <>
      {
        value.map.length !== 0 ?
          <h1>{value.map(entry =>
            <div>{entry.animal + ' ' + entry.name}</div>
          )}
          </h1> :
          <></>
      }

      <button onClick={roll}>Roll Dice</button>
    </>
  );
}
