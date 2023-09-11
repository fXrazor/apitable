/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const StyleOutlined: React.FC<IIconProps> = makeIcon({
    Path: ({ colors }) => <>
    <path d="M9.25 4.75C9.25 5.30228 8.80228 5.75 8.25 5.75C7.69772 5.75 7.25 5.30228 7.25 4.75C7.25 4.19772 7.69772 3.75 8.25 3.75C8.80228 3.75 9.25 4.19772 9.25 4.75Z" fill={ colors[0] }/>
<path d="M11.25 7.25C11.8023 7.25 12.25 6.80228 12.25 6.25C12.25 5.69772 11.8023 5.25 11.25 5.25C10.6977 5.25 10.25 5.69772 10.25 6.25C10.25 6.80228 10.6977 7.25 11.25 7.25Z" fill={ colors[0] }/>
<path d="M6.25 6.25C6.25 6.80228 5.80228 7.25 5.25 7.25C4.69772 7.25 4.25 6.80228 4.25 6.25C4.25 5.69772 4.69772 5.25 5.25 5.25C5.80228 5.25 6.25 5.69772 6.25 6.25Z" fill={ colors[0] }/>
<path d="M5 10.5C5.55228 10.5 6 10.0523 6 9.5C6 8.94772 5.55228 8.5 5 8.5C4.44772 8.5 4 8.94772 4 9.5C4 10.0523 4.44772 10.5 5 10.5Z" fill={ colors[0] }/>
<path d="M1 8C1 4.11114 4.10905 1 7.99688 1C11.8023 1 14.9927 3.75785 15 7.29846L15 7.3C15 9.66474 13.1332 11.525 10.7767 11.525H9.52736C9.38596 11.525 9.23413 11.6764 9.23413 11.8187C9.23407 11.8198 9.23332 11.8327 9.25225 11.8731C9.27287 11.9171 9.30156 11.9637 9.35361 12.0427C9.49209 12.1935 9.60458 12.3645 9.68066 12.5638C9.76559 12.7862 9.79011 13.0048 9.79011 13.2062C9.79011 14.1764 8.96742 15 7.99688 15C4.10905 15 1 11.8889 1 8ZM7.99688 2.5C4.93818 2.5 2.5 4.93886 2.5 8C2.5 11.0611 4.93818 13.5 7.99688 13.5C8.13828 13.5 8.29011 13.3486 8.29011 13.2062C8.29011 13.127 8.2804 13.1016 8.27932 13.0988C8.2786 13.0969 8.27716 13.0934 8.27262 13.0866C8.26766 13.0792 8.25677 13.0647 8.23478 13.0427L8.18229 12.9902L8.14111 12.9284L8.11902 12.8955C7.9919 12.707 7.73413 12.3248 7.73413 11.8187C7.73413 10.8486 8.55682 10.025 9.52736 10.025H10.7767C12.3056 10.025 13.4997 8.83558 13.5 7.30062C13.4942 4.74162 11.1376 2.5 7.99688 2.5Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'style_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M9.25 4.75C9.25 5.30228 8.80228 5.75 8.25 5.75C7.69772 5.75 7.25 5.30228 7.25 4.75C7.25 4.19772 7.69772 3.75 8.25 3.75C8.80228 3.75 9.25 4.19772 9.25 4.75Z', 'M11.25 7.25C11.8023 7.25 12.25 6.80228 12.25 6.25C12.25 5.69772 11.8023 5.25 11.25 5.25C10.6977 5.25 10.25 5.69772 10.25 6.25C10.25 6.80228 10.6977 7.25 11.25 7.25Z', 'M6.25 6.25C6.25 6.80228 5.80228 7.25 5.25 7.25C4.69772 7.25 4.25 6.80228 4.25 6.25C4.25 5.69772 4.69772 5.25 5.25 5.25C5.80228 5.25 6.25 5.69772 6.25 6.25Z', 'M5 10.5C5.55228 10.5 6 10.0523 6 9.5C6 8.94772 5.55228 8.5 5 8.5C4.44772 8.5 4 8.94772 4 9.5C4 10.0523 4.44772 10.5 5 10.5Z', 'M1 8C1 4.11114 4.10905 1 7.99688 1C11.8023 1 14.9927 3.75785 15 7.29846L15 7.3C15 9.66474 13.1332 11.525 10.7767 11.525H9.52736C9.38596 11.525 9.23413 11.6764 9.23413 11.8187C9.23407 11.8198 9.23332 11.8327 9.25225 11.8731C9.27287 11.9171 9.30156 11.9637 9.35361 12.0427C9.49209 12.1935 9.60458 12.3645 9.68066 12.5638C9.76559 12.7862 9.79011 13.0048 9.79011 13.2062C9.79011 14.1764 8.96742 15 7.99688 15C4.10905 15 1 11.8889 1 8ZM7.99688 2.5C4.93818 2.5 2.5 4.93886 2.5 8C2.5 11.0611 4.93818 13.5 7.99688 13.5C8.13828 13.5 8.29011 13.3486 8.29011 13.2062C8.29011 13.127 8.2804 13.1016 8.27932 13.0988C8.2786 13.0969 8.27716 13.0934 8.27262 13.0866C8.26766 13.0792 8.25677 13.0647 8.23478 13.0427L8.18229 12.9902L8.14111 12.9284L8.11902 12.8955C7.9919 12.707 7.73413 12.3248 7.73413 11.8187C7.73413 10.8486 8.55682 10.025 9.52736 10.025H10.7767C12.3056 10.025 13.4997 8.83558 13.5 7.30062C13.4942 4.74162 11.1376 2.5 7.99688 2.5Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
