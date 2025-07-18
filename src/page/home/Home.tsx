import { useNavigate } from 'react-router-dom';

import { HomeContainer } from '@/page/home/Home.css';
import { INTRO_MESSAGE } from '@/page/home/constant/scrollSection';
import { useFadeInOnView } from '@/page/home/hook/useFadeInOnView';
import StartSection from '@/page/home/StartSection/StartSection';
import ScrollSection from '@/page/home/ScrollSection/ScrollSection';
import EndSection from '@/page/home/EndSection/EndSection';
import { fadeSlide } from '@/page/home/style/fadeTransition.css';
import { useMultipleFadeInOnView } from '@/page/home/hook/useMultipleFadeInOnView';
import mandalAnimation from '@/assets/lottie/mandalart.json';
import aiAnimation from '@/assets/lottie/ai.json';
import { PATH } from '@/route';
import todoAnimation from '@/assets/lottie/todo.json';
const animationDataArray = [mandalAnimation, aiAnimation, todoAnimation];
const sectionKeys = ['mandalart', 'ai', 'todo'] as const;

const Home = () => {
  const navigate = useNavigate();
  const scrolls = useMultipleFadeInOnView();
  const end = useFadeInOnView<HTMLDivElement>();

  const handleOpenLogin = () => {
    // openModal(<LoginModal onClose={closeModal} />);
    navigate(PATH.TODO);
  };

  return (
    <div className={HomeContainer}>
      <StartSection onClick={handleOpenLogin} />

      {sectionKeys.map((key, index) => {
        const { ref, visible } = scrolls[index];
        return (
          <div key={key} ref={ref} className={fadeSlide({ state: visible ? 'in' : 'out' })}>
            <ScrollSection
              title={INTRO_MESSAGE[key].title}
              content={INTRO_MESSAGE[key].content}
              index={index}
              animationData={animationDataArray[index]}
            />
          </div>
        );
      })}

      <EndSection fadeInRef={end.ref} visible={end.visible} onClick={handleOpenLogin} />
    </div>
  );
};
export default Home;
