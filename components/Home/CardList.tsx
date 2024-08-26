import CardItem, { CardItemType } from './CardItem';

const CardList = ({ cardList }: { cardList: CardItemType[] }) => {
  return (
    <div className="row my-4">
      {cardList.map((item, index) => (
        <div key={index} className="col-md-4 col-sm-4 col-xs-12 my-3">
          <CardItem data={item} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
