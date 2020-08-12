import react, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import Text from './Typography';
import Container from './Container';

const Message = styled.div`
position: relative;
${Text}{
  color: var(--color-brand-5);

}

`;

const Root = styled.div`
${Text}{
  text-decoration: underline;
  cursor: pointer;
  color: #fff;
}
`;

const CovidModal = () => {
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <div>
      <Message>
        {modalStatus && (
          <Modal handleModal={() => setModalStatus(false)}>
            <Container>
              <Text as="h4">
                <p>COVID-19 OPERATING POLICIES</p>
              </Text>
              <Text>
                <p>
                  We’ve been busy taking action to best serve you when the time
                  was right.
                </p>
                <p>
                  As we re-open, we are following the new COVID-19 Safety
                  Guidelines:
                </p>
                <p>
                  <li>
                    Everything the stylist touches will be wiped down after each
                    client. That includes tools, products, chairs, counters,
                    etc.
                  </li>
                  <li>
                    Our stylist partners will be wearing face coverings while
                    inside our shops and serving clients, as well as washing
                    their hands before and after each service.
                  </li>
                </p>
                <p>
                  As we re-open, we need your help by following our new COVID
                  -19 Safety Guidelines:
                </p>
                <p>
                  <li>
                    Bring a mask. If you do not have a mask we will provide you
                    with one.
                  </li>
                  <li>Wash your hands upon arrival.</li>
                  <li>
                    Please come alone. We’re limiting the number of people in a
                    shop at a time. Please limit the items you bring inside the
                    salon to just your keys. Please leave any heavy outerwear in
                    your car if you can. Only beverages secured with lids will
                    be allowed inside.
                  </li>
                  <li>
                    We encourage cashless tips. You can choose to add the
                    standard 20% tip to your appointment during the booking
                    process or find the cash app or PayPal account on your
                    stylist's workstation mirror.
                  </li>
                </p>
              </Text>
              <Text as="h5">
                <p>
                  We thank you ahead of time for going with the flow. See you
                  soon!
                </p>
              </Text>
            </Container>
          </Modal>
        )}
      </Message>
      <Root>
        <Text as="p" onClick={() => setModalStatus(true)}>
          Certified in COVID-19 Safety Protocols
        </Text>
      </Root>
    </div>
  );
};

export default CovidModal;
