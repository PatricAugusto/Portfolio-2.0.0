export const metadata = {
  title: 'Patric Augusto | Portfólio',
  description: 'Portfólio de um Desenvolvedor Full Stack',
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
}