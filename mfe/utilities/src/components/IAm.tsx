import React from "react";

type IAmProps = {
	name: string;
};

function IAm({ name }: IAmProps) {
	return (
		<>
			<h2>I am {name}</h2>
		</>
	);
}

export default IAm;
