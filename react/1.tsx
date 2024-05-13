import { useEffect } from "react";

type MyModalProps = {
	children: React.ReactNode;
	open: boolean;
	disableGlobalScroll?: boolean;
};

function MyModal({ children, open, disableGlobalScroll }: MyModalProps) {
	useEffect(() => {
		disableGlobalScroll && (document.body.style.overflow = "hidden");

		return () => {
			disableGlobalScroll && (document.body.style.overflow = "unset");
		};
	}, [disableGlobalScroll]);

	if (!open) {
		return null;
	}

	return (
		<div
			style={{
				position: "fixed",
				inset: 0,
				height: "100dvh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "rgba(0, 0, 0, 0.5)",
				backdropFilter: "blur(2px)",
			}}
		>
			<div style={{ padding: 20, backgroundColor: "white", borderRadius: 4 }}>
				{children}
			</div>
		</div>
	);
}

export default MyModal;
