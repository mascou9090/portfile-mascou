import { bioTec, imgs, index } from '../../utils';
import { BioTec } from './BioTec';
import * as C from './style';
import { Tec } from './Tec';

export const Tecs = () => {
  return (
    <>
      <C.Container>
        <Tec index={1} url={imgs[0]} />
        <Tec index={2} url={imgs[8]} />
        <Tec index={3} url={imgs[1]} />
        <Tec index={4} url={imgs[9]} />
        <Tec index={5} url={imgs[7]} />
        <Tec index={6} url={imgs[2]} />
        <Tec index={7} url={imgs[4]} />
        <Tec index={8} url={imgs[5]} />
        <Tec index={9} url={imgs[6]} />
        <Tec index={10} url={imgs[11]} />
        <Tec index={11} url={imgs[3]} />
        <Tec index={12} url={imgs[10]} />
        <Tec index={13} url={imgs[17]} />
        <Tec index={14} url={imgs[12]} />
        <Tec index={15} url={imgs[13]} />
        <Tec index={16} url={imgs[14]} />
        <Tec index={17} url={imgs[15]} />
        <Tec index={18} url={imgs[16]} />
        <>
          <BioTec index={index} bioTec={bioTec} />
        </>
      </C.Container>

    </>
  )
}
