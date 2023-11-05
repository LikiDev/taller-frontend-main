import styled from 'styled-components';

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 50px;
  @media (max-width: 450px) {
    font-size: 48px;
  }
`;

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 32px;
  @media (max-width: 450px) {
    font-size: 24px;
  }
`;

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 30px;
  @media (max-width: 450px) {
    font-size: 24px;
  }
`;

export const BodyIntro = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`;

export const BodyMain = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
`;

export const MediumText = styled.p`
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  @media (max-width: 450px) {
    font-size: 15px;
    line-height: 100%;
  }
`;

export const DescriptionCard = styled.p`
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  @media (max-width: 450px) {
    font-size: 14px;
    line-height: 100%;
  }
`;

export const Caption = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`;

export const Caption2 = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`;

export const SmallText = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`;

export const SmallText2 = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
`;

export const ProjectFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 2rem auto;
  background: #FFFFFF; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: fit-content;
`;

export const CardInput = styled.div`
  width: 546.48px; 
  height: 469.55px; 
  padding: 23px 22px;
  border-radius: 14.73px;
  border: 0.37px solid #ccc; 
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center; 
  margin-top: 237.64px; 
  margin-left: 447px; 
`;

export const Title = styled.h2`
  font-family: 'SF Pro Text', sans-serif; 
  font-size: 55px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: 0em;
  text-align: center;
  color: #333; 
  margin-bottom: 1.5rem; 
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd; 
  border-radius: 5px;
`;

type ButtonProps = {
  delete?: boolean; 
}
export const Button = styled.button<ButtonProps>`
  padding: 0.5rem;
  margin: 1rem 0.5rem 0.5rem 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.delete ? '#DC143C' : '#6A5ACD'};
  color: white;
`;

