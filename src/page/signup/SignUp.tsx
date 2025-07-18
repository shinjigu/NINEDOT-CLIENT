import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { IcCheckboxChecked, IcCheckboxDefault, IcEssentialDot } from '@/assets/svg';
import BasicInfoSection from '@/page/signup/BasicInfoSection/BasicInfoSection';
import SurveySection from '@/page/signup/SurveySection/SurveySection';
import SignUpButton from '@/page/signup/component/SignUpButton/SignUpButton';
import * as styles from '@/page/signup/SignUp.css';
import { useSignUpForm } from '@/page/signup/hook/useSignUpForm';
import { PATH } from '@/route';
import { usePostSignUp } from '@/api/domain/signup/hook/usePostSignup';
import type { SignupResponse } from '@/api/domain/signup/type/SignupResponse';

const SIGNUP_MESSAGE = '회원가입 후 NiNE DOT를 만나보세요!';
const FIT_INFO_MESSAGE = '내 성향을 선택하고 맞춤형 목표 추천을 받아보세요';
const PERSONAL_INFO_AGREEMENT = '(필수) 개인정보 수집 및 이용약관 동의';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state?.userData;

  const [answers, setAnswers] = useState<Record<number, number>>({});

  const { formState, actions, computed } = useSignUpForm(userData);

  const { name, email, birth, selectedJob, inputJob, isChecked } = formState;
  const { setName, setEmail, setBirth, setSelectedJob, setInputJob, setIsChecked } = actions;
  const { finalJob, isValid } = computed;

  const CheckIcon = isChecked ? IcCheckboxChecked : IcCheckboxDefault;

  const { mutate: signUp } = usePostSignUp();

  const handleSignUp = () => {
    const payload: SignupResponse = {
      socialProvider: 'GOOGLE',
      socialToken: userData.socialToken,
      name,
      email,
      birthday: birth,
      job: finalJob,
      profileImageUrl: userData.profileImageUrl,
      answers: Object.entries(answers).map(([questionId, choiceId]) => ({
        questionId: Number(questionId),
        choiceId,
      })),
    };

    signUp(payload, {
      onSuccess: () => {
        navigate(PATH.INTRO);
      },
      onError: (err) => {
        console.error('회원가입 실패:', err);
      },
    });
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.layoutContainer}>
        <header className={styles.headerContainer}>
          <h1 className={styles.headerText}>회원가입</h1>
          <p className={styles.descriptionText}>{SIGNUP_MESSAGE}</p>
        </header>

        <section>
          <div className={styles.basicInfoContainer}>
            <h2 className={styles.infoText}>기본 정보</h2>
            <span>
              <IcEssentialDot className={styles.essentialIcon} />
              <span className={styles.essentialText}>필수 입력 항목</span>
            </span>
          </div>
          <div className={styles.basicInfoSection}>
            <BasicInfoSection
              name={name}
              email={email}
              birth={birth}
              setName={setName}
              setEmail={setEmail}
              setBirth={setBirth}
              selectedJob={selectedJob}
              setSelectedJob={setSelectedJob}
              inputJob={inputJob}
              setInputJob={setInputJob}
            />
          </div>
        </section>

        <section>
          <div className={styles.fitInfoContainer}>
            <span className={styles.infoText}>맞춤 정보</span>
            <p className={styles.fitInfoText}>{FIT_INFO_MESSAGE}</p>
          </div>
          <div className={styles.surveySection}>
            <SurveySection answers={answers} setAnswers={setAnswers} />
          </div>
        </section>

        <div className={styles.agreementContainer}>
          <button onClick={() => setIsChecked(!isChecked)}>
            <CheckIcon className={styles.checkboxIcon} />
          </button>
          <p className={styles.agreeText}>{PERSONAL_INFO_AGREEMENT}</p>
          <button className={styles.seeText}>보기</button>
        </div>

        <div className={styles.buttonContainer}>
          <SignUpButton onClick={handleSignUp} disabled={!isValid}>
            가입하기
          </SignUpButton>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
