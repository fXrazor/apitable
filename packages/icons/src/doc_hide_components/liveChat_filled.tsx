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

export const LivechatFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <rect width="40" height="40" rx="8" fill={ colors[0] } fillOpacity="0.2"/>
    <path d="M34 13.025C34 11.6013 34 10.8894 33.7185 10.3476C33.4813 9.89096 33.109 9.51866 32.6524 9.28147C32.1106 9 31.3987 9 29.975 9H18.025C16.6013 9 15.8894 9 15.3476 9.28147C14.891 9.51866 14.5187 9.89096 14.2815 10.3476C14 10.8894 14 11.6013 14 13.025L14 20.17C14 21.8785 14 22.7327 14.3378 23.3829C14.6224 23.9309 15.0691 24.3776 15.6171 24.6622C16.2673 25 17.1215 25 18.83 25H22.9477C23.5388 25 23.8343 25 24.1185 25.0554C24.3603 25.1025 24.5954 25.1792 24.8184 25.2838C25.0806 25.4067 25.3192 25.581 25.7966 25.9297L27.4404 27.1303C28.2748 27.7398 28.692 28.0446 29.0406 28.0304C29.3311 28.0186 29.602 27.881 29.7829 27.6534C30 27.3802 30 26.8635 30 25.8302V25.6667C30 25.5117 30 25.4342 30.017 25.3706C30.0633 25.198 30.198 25.0633 30.3706 25.017C30.4342 25 30.5117 25 30.6667 25V25C31.4416 25 31.8291 25 32.147 24.9148C33.0098 24.6836 33.6836 24.0098 33.9148 23.147C34 22.8291 34 22.4416 34 21.6667V13.025Z" fill={ colors[0] } fillOpacity="0.6"/>
    <g clipPath="url(#clip0_4392_137002)">

      <path d="M6 17.83C6 16.1215 6 15.2673 6.33776 14.6171C6.62239 14.0691 7.06915 13.6224 7.61708 13.3378C8.26729 13 9.12153 13 10.83 13H22.17C23.8785 13 24.7327 13 25.3829 13.3378C25.9309 13.6224 26.3776 14.0691 26.6622 14.6171C27 15.2673 27 16.1215 27 17.83V25.17C27 26.8785 27 27.7327 26.6622 28.3829C26.3776 28.9309 25.9309 29.3776 25.3829 29.6622C24.7327 30 23.8785 30 22.17 30H18.4624C17.9132 30 17.6386 30 17.3732 30.0481C17.1473 30.0891 16.9268 30.1558 16.7162 30.247C16.4687 30.3542 16.2402 30.5066 15.7832 30.8112L13.5031 32.3313C12.6813 32.8791 12.2704 33.153 11.9296 33.129C11.6455 33.109 11.3834 32.9687 11.209 32.7434C11 32.4731 11 31.9793 11 30.9917V30.7143C11 30.5148 11 30.415 10.9719 30.3349C10.9217 30.1912 10.8088 30.0783 10.6651 30.0281C10.585 30 10.4852 30 10.2857 30V30C9.08876 30 8.49028 30 8.00916 29.8316C7.14742 29.5301 6.46989 28.8526 6.16835 27.9908C6 27.5097 6 26.9112 6 25.7143V17.83Z" fill="#907FF0"/>

      <circle cx="11.5" cy="21.5" r="1.5" fill="white" fill-opacity="0.8"/>

      <circle cx="16.5" cy="21.5" r="1.5" fill="white" fill-opacity="0.8"/>

      <circle cx="21.5" cy="21.5" r="1.5" fill="white" fill-opacity="0.8"/>

    </g>
    <defs>

      <clipPath id="clip0_4392_137002">

        <rect width="21" height="21" fill="white" transform="translate(6 13)"/>

      </clipPath>

    </defs>

  </>,
  name: 'liveChat_filled',
  defaultColors: ['#907FF0', 'white'],
  colorful: true,
  allPathData: ['M34 13.025C34 11.6013 34 10.8894 33.7185 10.3476C33.4813 9.89096 33.109 9.51866 32.6524 9.28147C32.1106 9 31.3987 9 29.975 9H18.025C16.6013 9 15.8894 9 15.3476 9.28147C14.891 9.51866 14.5187 9.89096 14.2815 10.3476C14 10.8894 14 11.6013 14 13.025L14 20.17C14 21.8785 14 22.7327 14.3378 23.3829C14.6224 23.9309 15.0691 24.3776 15.6171 24.6622C16.2673 25 17.1215 25 18.83 25H22.9477C23.5388 25 23.8343 25 24.1185 25.0554C24.3603 25.1025 24.5954 25.1792 24.8184 25.2838C25.0806 25.4067 25.3192 25.581 25.7966 25.9297L27.4404 27.1303C28.2748 27.7398 28.692 28.0446 29.0406 28.0304C29.3311 28.0186 29.602 27.881 29.7829 27.6534C30 27.3802 30 26.8635 30 25.8302V25.6667C30 25.5117 30 25.4342 30.017 25.3706C30.0633 25.198 30.198 25.0633 30.3706 25.017C30.4342 25 30.5117 25 30.6667 25V25C31.4416 25 31.8291 25 32.147 24.9148C33.0098 24.6836 33.6836 24.0098 33.9148 23.147C34 22.8291 34 22.4416 34 21.6667V13.025Z'],
  width: '40',
  height: '40',
  viewBox: '0 0 40 40',
});
