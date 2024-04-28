import React from 'react';
import './Wishes.css'; 
import loveImage from './Image/love.gif'

const Wishes = () => {
  return (
    <div className="wishes-container">
      <div className='details'>
      <h1 className="birthday-title">Chúc mừng sinh nhật Em Yêu</h1>
      <div className='birthday_css'>
      <p className="birthday-message">Chúc mừng sinh nhật, cô gái đáng yêu nhất trong vũ trụ này!. Chúc em có một tuổi mới luôn tràn đầy nụ cười và hạnh phúc và chúc em luôn thành công trên con đường mà mình đã chọn, yêu em dù có như thế nào đi nữa. <h3>Lóp bờ you</h3></p>
      </div>
      </div>
      <div className="Images">
        <img src={loveImage} alt='love' width={450} height={680}></img>
      </div>
    </div>
  );
};

export default Wishes;
