import { useState } from "react";
// third party
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// local
import "./PhotoCard.css";
<<<<<<< HEAD
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
=======
>>>>>>> 005bb6db321bd7c9af605eae98202b2907c6a723
import { openModal } from "../redux/features/modal/modalSlice";

function PhotoCard({
  articleId,
  author,
  createdDate,
  imageLink,
  loverCnt,
  loverYn,
  tags,
  payload,
}) {
  const { isLogin, userInfo } = useSelector((store) => store.login);

  const dispatch = useDispatch();
  // 좋아요 체크 되어있으면 like:1 안 했으면 :0
  const [like, setLike] = useState(loverYn);

  const handleCardClick = () => {
<<<<<<< HEAD
    // if (!isLogin || !userInfo) {
    //   alert(
    //     "네컷사진을 자세히 보기 위해서는 로그인이 필요합니다.\n로그인 후 진행해주시길 바랍니다."
    //   );
    // } else {
    dispatch(openModal(payload));
    // }
=======
    if (!isLogin || !userInfo) {
      alert(
        "네컷사진을 자세히 보기 위해서는 로그인이 필요합니다.\n로그인 후 진행해주시길 바랍니다."
      );
    } else {
      dispatch(openModal(payload));
    }
>>>>>>> 005bb6db321bd7c9af605eae98202b2907c6a723
  };

  return (
    <div className="PhotoCard" onClick={handleCardClick}>
      <img
        width="200px"
        height="200px"
        style={{ objectFit: "contain" }}
<<<<<<< HEAD
=======
        // 가로세로비율 유지하면서 요소 내부에 들어감, 크기 맞지 않을 경우 가로세로비율 유지되는 정도까지 크기가 유지된다.
>>>>>>> 005bb6db321bd7c9af605eae98202b2907c6a723
        src={imageLink}
        alt="네컷 이미지"
      />
      <div className="HeartBtn">
        <div className="Heartcontent">
          <span className={like === 1 ? "Heart Full" : "Heart"}></span>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
