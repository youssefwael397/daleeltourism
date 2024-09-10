import { useTranslation } from '@/app/i18n';

type PropsType = {
  cardUrl: string;
  src: string;
  type: string;
  lng: string;
};

export default async function SingleHeader({
  cardUrl,
  src,
  type,
  lng,
}: PropsType) {
  const { t } = await useTranslation(lng, 'headers');
  const title = t(`${cardUrl}.title`);
  const subTitle = t(`${cardUrl}.subTitle`);

  return (
    <div className="w-100">
      <div
        style={{ position: 'relative', maxHeight: '70vh', overflow: 'hidden' }}
      >
        {type === 'img' && <img src={src} alt={title} className="w-100" />}
        {type === 'vid' && (
          <iframe
            src={src}
            title={t(cardUrl)}
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
