export default function Title(props) {
  return (
    <h1 className="text-3xl font-bold flex-grow text-center">
      {props.children}
    </h1>
  );
}
