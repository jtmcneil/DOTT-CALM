import "./BottomBar.css";

export default function BottomBar() {
    return (
        <div id="BottomBar">
            <section className="left">
                <div className="oval"></div>
                <div className="oval"></div>
            </section>
            <section className="center">
                {/* .CALM<sup> &#169;</sup> */}
            </section>
            <section className="right">
                <span className="released">&#10066; </span>
                &#10066;&#10066; &#10066; &#10066;&#10066; &#10066; &#10066;
            </section>
        </div>
    );
}
