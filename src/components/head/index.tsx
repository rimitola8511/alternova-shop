import { Helmet } from "react-helmet";

type HeadProps = {
  title: string;
  description: string;
};

export const Head = ({ title, description }: HeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel='icon' href='logo.png' type='image/x-icon' />
      <meta name='description' content={description} />
      <meta name='keywords' content='Alternova, React, Shop, JavaScript' />
      <meta name='author' content='Ricardo Imitola' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#ffe600' />
    </Helmet>
  );
};
