import useWordsApi from "../hooks/useWordsApi";

interface WordDetailsProps {
  allWordsFromLetter: string[];
}

const WordDetails = ({allWordsFromLetter}: WordDetailsProps) => {
  // description
  const { data, loading, error } = useWordsApi(allWordsFromLetter);

  if (loading) return <p>Generating Image...Please Wait</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="w-full px-4 md:px-4 py-3 pb-8 flex flex-wrap justify-center items-center">
  <div className="flex items-center justify-center w-full md:w-6/12 ">
    {/* Animation for Image  */}
    {data.map((image, index) => (
      <div key={index} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30" style={{ margin: '10px' }}>
        <div className="h-96 w-86">
          <img
            src={image}
            alt={allWordsFromLetter[index]}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          />
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default WordDetails;