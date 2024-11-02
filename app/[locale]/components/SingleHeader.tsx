import { useTranslations } from 'next-intl';

type PropsType = {
  title: string;
  subTitle: string;
  src: string;
  type: string;
};

export default function SingleHeader({
  title,
  subTitle,
  src,
  type,
}: PropsType) {
  return (
    <div className="w-100">
      <div
        style={{ position: 'relative', maxHeight: '70vh', overflow: 'hidden' }}
      >
        {type === 'img' && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={title}
            className={`w-100 ${
              subTitle == 'DOHA' || subTitle == 'ДОХУ' ? 'doha_header_img' : ''
            }`}
          />
        )}
        {type === 'vid' && (
          <iframe
            src={src}
            title={title}
            allowFullScreen
            className="w-100"
            style={{ height: '70vh' }}
          />
        )}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <h2 className="text-white">
            {title}
            <p>{subTitle}</p>
          </h2>
        </div>
      </div>
    </div>
  );
}
