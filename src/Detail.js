import styled from "styled-components";

const Detail = () => {
	return (
		<Contaier>
			<BackGround>
				<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
			</BackGround>

			<ImageTitle>
				<img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
			</ImageTitle>

			<Controls>
				<PlayButtons>
					<img src="\Disney Plus\images\play-icon-black.png" />
					<span>PLAY</span>
				</PlayButtons>
				<TrailerButtons>
					<img src="\Disney Plus\images\play-icon-white.png" />
					<span>Trailer</span>
				</TrailerButtons>

				<AddButtons>
					<span>+</span>
				</AddButtons>
				<GroupWatchButtons>
					<img src="\Disney Plus\images\group-icon.png" alt="" />
				</GroupWatchButtons>
			</Controls>

			<SubTitle>
				<span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
					veniam.
				</span>
			</SubTitle>

			<Description>
				<span>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt in
					iste nesciunt accusantium quod magni eius iure, perspiciatis labore
					quaerat.
				</span>
			</Description>
		</Contaier>
	);
};

const Contaier = styled.div`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
`;

const BackGround = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	opacity: 0.8;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const ImageTitle = styled.div`
	margin-top: 30px;
	height: 30vh;
	width: 35vw;
	min-height: 170px;
	min-width: 200px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const Controls = styled.div`
	display: flex;
	margin-top: 30px;
	align-items: center;
`;
const PlayButtons = styled.button`
	border-radius: 4px;
	font-size: 15px;
	display: flex;
	align-items: center;
	height: 54px;
	background: rgb(249, 249, 249);
	padding: 0 24px;
	margin-right: 24px;
	letter-spacing: 1.8px;
	cursor: pointer;
	border: none;

	&:hover {
		background: rgb(198, 198, 198);
	}
`;
const TrailerButtons = styled(PlayButtons)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgba(249, 249, 249);
	color: white;
	text-transform: uppercase;

	&:hover {
		color: black;
	}
`;
const AddButtons = styled.button`
	margin-right: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	height: 44px;
	border-radius: 50%;
	border: 2px solid white;
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;

	span {
		font-size: 30px;
		color: white;
	}
`;
const GroupWatchButtons = styled(AddButtons)``;

const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
`;

const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	color: rgb(249, 249, 249);
`;

export default Detail;
