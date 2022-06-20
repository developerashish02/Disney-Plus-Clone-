import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<Nav>
			<Logo src="\Disney Plus\images\logo.svg" />
			<NavMenu>
				<a>
					<img src="\Disney Plus\images\home-icon.svg" alt="" />
					<span>HOME</span>
				</a>
				<a>
					<img src="\Disney Plus\images\search-icon.svg" alt="" />
					<span>SEARCH</span>
				</a>
				<a>
					<img src="\Disney Plus\images\home-icon.svg" alt="" />
					<span>WATCHLIST</span>
				</a>
				<a>
					<img src="\Disney Plus\images\original-icon.svg" alt="" />
					<span>ORIGINALS</span>
				</a>
				<a>
					<img src="\Disney Plus\images\movie-icon.svg" alt="" />
					<span>MOVIE</span>
				</a>
				<a>
					<img src="\Disney Plus\images\series-icon.svg" alt="" />
					<span>SERIES</span>
				</a>
			</NavMenu>

			<UserImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU" />
		</Nav>
	);
}

const Nav = styled.nav`
	display: flex;
	align-items: center;
	height: 70px;
	background: #090b13;
	padding: 0 36px;
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 20px;
	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;

		img {
			height: 20px;
		}

		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			position: relative;

			&:after {
				content: "";
				height: 2px;
				background-color: white;
				position: absolute;
				bottom: -6px;
				left: 0;
				right: 0;
				opacity: 0;
				transform: scaleX(0);
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25 , 0.46,0.45,0.94) 0s;
			}
		}

		&:hover {
			span:after {
				transform: scale(1);
				opacity: 1;
			}
		}
	}
`;

const UserImage = styled.img`
	height: 48px;
	width: 48px;
	border-radius: 50%;
	cursor: pointer;
`;
export default Header;
