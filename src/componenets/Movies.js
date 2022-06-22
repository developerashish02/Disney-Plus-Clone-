import styled from "styled-components";

const Movies = () => {
	return (
		<Container>
			<h4>Recommanded For You</h4>
			<Content>
				<Wrap>
					<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
				</Wrap>
				<Wrap>
					<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
				</Wrap>
				<Wrap>
					<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
				</Wrap>
				<Wrap>
					<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
				</Wrap>
				<Wrap>
					<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
				</Wrap>
				<Wrap>
					<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
				</Wrap>
				<Wrap>
					<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
				</Wrap>
				<Wrap>
					<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
				</Wrap>
				<Wrap>
					<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
				</Wrap>
				<Wrap>
					<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
				</Wrap>
			</Content>
		</Container>
	);
};

const Container = styled.div`
	overflow: hidden;
`;

const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	grid-gap: 25px;
`;
const Wrap = styled.div`
	border-radius: 10px;
	overflow: hidden;
	border: 3px solid rgba (249, 249, 249, 0.1);
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	cursor: pointer;
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	&:hover {
		transform: scale(1.05);
	}
`;
export default Movies;
