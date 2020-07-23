import styled from "styled-components";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import MainGrid from "components/shared/MainGrid";
import Title from "components/shared/Title";
import FormComplete from "components/FormComplete";

const BlogFooter = ({ url, production }) => (
  <>
    <ShareColumn>
      <h3>
        ¿Conoces a alguien que le interese esta información?
        <b> Comparte este blog post</b>
      </h3>
      <TwitterShareButton url={url}>
        <TwitterIcon size={55} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={55} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={55} round={true} />
      </WhatsappShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={55} round={true} />
      </LinkedinShareButton>
    </ShareColumn>
    <Title notoppadding>
      <p>
        La estrategia de hoy es mucho más que <b>sobrevivir</b>
      </p>
      <h3>
        Encuentra <b>certidumbre</b> con Deep Future Institute
      </h3>
    </Title>
    <LastForm>
      <FormComplete
        production={production}
        centered
        collectorId="BlogCollector"
      />
    </LastForm>
  </>
);
export default BlogFooter;

const ShareColumn = styled.div`
  max-width: 660px;
  margin: 0 auto;
  margin-top: -5%;
  margin-bottom: 5%;
  button {
    margin-right: 10px;
  }
  h3 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  @media (max-width: 1000px) {
    max-width: 550px;
    margin-bottom: 10%;
    h3 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 600px) {
    padding-right: 5%;
    padding-left: 5%;
    margin: 0 0 10% 0;
  }
`;

const LastForm = styled(MainGrid)`
  padding-bottom: 6%;
  > div {
    background-color: ${(props) => props.theme.colors.home.accent};
  }
  @media (max-width: 950px) {
    padding-bottom: 0;
  }
`;
