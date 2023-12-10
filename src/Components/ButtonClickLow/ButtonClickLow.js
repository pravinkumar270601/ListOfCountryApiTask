import { useContext } from "react";
import { UnivercityContext } from "../Context/Context";

const ButtonClickLow = () => {
  const { sortallcountry } = useContext(UnivercityContext);
  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">County Name</th>
            <th scope="col">Number of the University</th>
          </tr>
        </thead>
        {sortallcountry.map((e) => {
          if (e.count === sortallcountry[0].count) {
            // lowest contry count
            return (
              <>
                <tbody>
                  <tr>
                    <td>{e.country}</td>
                    <td>{e.count}</td>
                  </tr>
                </tbody>
              </>
            );
          }
        })}
      </table>
    </div>
  );
};

export default ButtonClickLow;
