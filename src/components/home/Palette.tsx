"use client";

export default function PaletteComponent() {
  return (
    <>
      <details className={"palette-content"}>
        <summary>Color palette</summary>
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td>Name</td>
              <td>Color</td>
              <td>Hex</td>
            </tr>
            <tr>
              <td>Base</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#571539" }}
                ></div>
              </td>
              <td className={"palette-button"}>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("#571539");
                  }}
                >
                  hex: #571539
                </button>
              </td>
            </tr>
            <tr>
              <td>Orange</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#f27a23" }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Yellow</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#feec4c" }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Text</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#cea0c4" }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Surface1</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#e05045" }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Mantle</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#a32f20" }}
                ></div>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Crust</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#5b141a" }}
                ></div>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Peach</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#f5ac89" }}
                ></div>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Red</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#da223a" }}
                ></div>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Pink</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#ea578b" }}
                ></div>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Purple</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#8045a1" }}
                ></div>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Blue</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#483c90" }}
                ></div>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Sapphire</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#a2b7e2" }}
                ></div>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Sky</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#cee8e9" }}
                ></div>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Green</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#58a62c" }}
                ></div>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>Black</td>
              <td>
                <div
                  className={"palette-color"}
                  style={{ background: "#1c0000" }}
                ></div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </details>
    </>
  );
}
