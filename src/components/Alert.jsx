export default function Alert({ alert }) {
    return (
        <div className={alert.type === "success" ? "alert success" : "alert error"}>
            {alert.content}
        </div>
    );
}