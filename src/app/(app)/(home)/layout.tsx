const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-screen flex-col">
			<header>Header Section</header>

			<main>{children}</main>

			<footer className="mt-auto">Footer Section</footer>
		</div>
	);
};

export default HomeLayout;
