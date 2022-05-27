import { Comon, Slice, Sugar, Vegan } from './slicesTypes';

interface IPizza {
  flavor: string;
  slices: Slice;
}

interface ICommon extends IPizza {
  flavor: Comon,
};

interface IVegan extends IPizza {
  flavor: Vegan,
}

interface ISugar extends IPizza {
  flavor: Sugar,
  slices : 4,
}

export {
  IPizza,
  ICommon,
  IVegan,
  ISugar,
};