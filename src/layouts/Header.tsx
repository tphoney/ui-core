// Copyright 2021 Harness, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @ts-nocheck

import React from "react";
import { css, cx } from "@emotion/css";
import colors from "../shared/colors";

const rootCss = css`
	display: grid;
	grid-template-rows: auto 1fr;
	grid-template-areas:
		"header"
		"content";

	height: 100%;
	width: 100%;

	@media only screen and (max-width: 800px) {
		display: block;
		grid-template-rows: unset;
		grid-template-areas: unset;
		height: 100%;
		width: 100%;
	}
`;

const contentCss = css`
	background: ${colors.gray50};
	grid-area: content;
	overflow-y: auto;
	max-height: 100%;
	min-height: 100%;
	height: 0;

	@media only screen and (max-width: 800px) {
		display: block;
		overflow-y: unset;
		max-height: unset;
		min-height: unset;
		height: unset;
	}
`;

const headerCss = css`
	grid-area: header;
`;

export default (props) => {
	return (
		<div className={cx(rootCss, props.className)}>
			<div className={headerCss}>{props.header}</div>
			<div className={contentCss}>{props.children}</div>
		</div>
	);
};