const Post = ({ params }) => {
  const id = params.id;

  return (
    <div>
      <h1>titulo: {id}</h1>
      <p>Conteúdo do post com o ID: {id}</p>
    </div>
  );
};

export default Post;