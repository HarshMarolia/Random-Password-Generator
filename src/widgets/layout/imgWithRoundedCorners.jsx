import fasal from '../../img/fasal.png';
export function ImgWithRoundedCorners() {
  return (
    <a href="https://pmfby.gov.in/" target='_blank'>
      <img
        className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
        src={fasal}
        alt="nature image"
      />
    </a>
  );
}