import { GetStartedFormUI, ModalProps } from "components";

const GetStartedForm:React.FC<ModalProps> = ({show, close}) => {
  return (
    <>
      <GetStartedFormUI show={show} close={close} />
    </>
  );
};
export { GetStartedForm };
