
"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, Dot, ResponsiveContainer, Tooltip, YAxis } from "recharts"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BarChart3, Table as TableIcon } from "lucide-react"

// import TabularData from "../TabularData"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartContainer,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import VirtualTabularData from "./VirtualTabularData"

// const chartData = [
//   { date: "2024-04-01", desktop: 222, mobile: 150 },
//   { date: "2024-04-02", desktop: 97, mobile: 180 },
//   { date: "2024-04-03", desktop: 167, mobile: 120 },
//   { date: "2024-04-04", desktop: 242, mobile: 260 },
//   { date: "2024-04-05", desktop: 373, mobile: 290 },
//   { date: "2024-04-06", desktop: 301, mobile: 340 },
//   { date: "2024-04-07", desktop: 245, mobile: 180 },
//   { date: "2024-04-08", desktop: 409, mobile: 320 },
//   { date: "2024-04-09", desktop: 59, mobile: 110 },
//   { date: "2024-04-10", desktop: 261, mobile: 190 },
//   { date: "2024-04-11", desktop: 327, mobile: 350 },
//   { date: "2024-04-12", desktop: 292, mobile: 210 },
//   { date: "2024-04-13", desktop: 342, mobile: 380 },
//   { date: "2024-04-14", desktop: 137, mobile: 220 },
//   { date: "2024-04-15", desktop: 120, mobile: 170 },
//   { date: "2024-04-16", desktop: 138, mobile: 190 },
//   { date: "2024-04-17", desktop: 446, mobile: 360 },
//   { date: "2024-04-18", desktop: 364, mobile: 410 },
//   { date: "2024-04-19", desktop: 243, mobile: 180 },
//   { date: "2024-04-20", desktop: 89, mobile: 150 },
//   { date: "2024-04-21", desktop: 137, mobile: 200 },
//   { date: "2024-04-22", desktop: 224, mobile: 170 },
//   { date: "2024-04-23", desktop: 138, mobile: 230 },
//   { date: "2024-04-24", desktop: 387, mobile: 290 },
//   { date: "2024-04-25", desktop: 215, mobile: 250 },
//   { date: "2024-04-26", desktop: 75, mobile: 130 },
//   { date: "2024-04-27", desktop: 383, mobile: 420 },
//   { date: "2024-04-28", desktop: 122, mobile: 180 },
//   { date: "2024-04-29", desktop: 315, mobile: 240 },
//   { date: "2024-04-30", desktop: 454, mobile: 380 },
//   { date: "2024-05-01", desktop: 165, mobile: 220 },
//   { date: "2024-05-02", desktop: 293, mobile: 310 },
//   { date: "2024-05-03", desktop: 247, mobile: 190 },
//   { date: "2024-05-04", desktop: 385, mobile: 420 },
//   { date: "2024-05-05", desktop: 481, mobile: 390 },
//   { date: "2024-05-06", desktop: 498, mobile: 520 },
//   { date: "2024-05-07", desktop: 388, mobile: 300 },
//   { date: "2024-05-08", desktop: 149, mobile: 210 },
//   { date: "2024-05-09", desktop: 227, mobile: 180 },
//   { date: "2024-05-10", desktop: 293, mobile: 330 },
//   { date: "2024-05-11", desktop: 335, mobile: 270 },
//   { date: "2024-05-12", desktop: 197, mobile: 240 },
//   { date: "2024-05-13", desktop: 197, mobile: 160 },
//   { date: "2024-05-14", desktop: 448, mobile: 490 },
//   { date: "2024-05-15", desktop: 473, mobile: 380 },
//   { date: "2024-05-16", desktop: 338, mobile: 400 },
//   { date: "2024-05-17", desktop: 499, mobile: 420 },
//   { date: "2024-05-18", desktop: 315, mobile: 350 },
//   { date: "2024-05-19", desktop: 235, mobile: 180 },
//   { date: "2024-05-20", desktop: 177, mobile: 230 },
//   { date: "2024-05-21", desktop: 82, mobile: 140 },
//   { date: "2024-05-22", desktop: 81, mobile: 120 },
//   { date: "2024-05-23", desktop: 252, mobile: 290 },
//   { date: "2024-05-24", desktop: 294, mobile: 220 },
//   { date: "2024-05-25", desktop: 201, mobile: 250 },
//   { date: "2024-05-26", desktop: 213, mobile: 170 },
//   { date: "2024-05-27", desktop: 420, mobile: 460 },
//   { date: "2024-05-28", desktop: 233, mobile: 190 },
//   { date: "2024-05-29", desktop: 78, mobile: 130 },
//   { date: "2024-05-30", desktop: 340, mobile: 280 },
//   { date: "2024-05-31", desktop: 178, mobile: 230 },
//   { date: "2024-06-01", desktop: 178, mobile: 200 },
//   { date: "2024-06-02", desktop: 470, mobile: 410 },
//   { date: "2024-06-03", desktop: 103, mobile: 160 },
//   { date: "2024-06-04", desktop: 439, mobile: 380 },
//   { date: "2024-06-05", desktop: 88, mobile: 140 },
//   { date: "2024-06-06", desktop: 294, mobile: 250 },
//   { date: "2024-06-07", desktop: 323, mobile: 370 },
//   { date: "2024-06-08", desktop: 385, mobile: 320 },
//   { date: "2024-06-09", desktop: 438, mobile: 480 },
//   { date: "2024-06-10", desktop: 155, mobile: 200 },
//   { date: "2024-06-11", desktop: 92, mobile: 150 },
//   { date: "2024-06-12", desktop: 492, mobile: 420 },
//   { date: "2024-06-13", desktop: 81, mobile: 130 },
//   { date: "2024-06-14", desktop: 426, mobile: 380 },
//   { date: "2024-06-15", desktop: 307, mobile: 350 },
//   { date: "2024-06-16", desktop: 371, mobile: 310 },
//   { date: "2024-06-17", desktop: 475, mobile: 520 },
//   { date: "2024-06-18", desktop: 107, mobile: 170 },
//   { date: "2024-06-19", desktop: 341, mobile: 290 },
//   { date: "2024-06-20", desktop: 408, mobile: 450 },
//   { date: "2024-06-21", desktop: 169, mobile: 210 },
//   { date: "2024-06-22", desktop: 317, mobile: 270 },
//   { date: "2024-06-23", desktop: 480, mobile: 530 },
//   { date: "2024-06-24", desktop: 132, mobile: 180 },
//   { date: "2024-06-25", desktop: 141, mobile: 190 },
//   { date: "2024-06-26", desktop: 434, mobile: 380 },
//   { date: "2024-06-27", desktop: 448, mobile: 490 },
//   { date: "2024-06-28", desktop: 149, mobile: 200 },
//   { date: "2024-06-29", desktop: 103, mobile: 160 },
//   { date: "2024-06-30", desktop: 446, mobile: 400 },
// ]
const chartData = [
    {
        "date": "2021-05-20T18:52:55.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T18:53:55.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T18:54:55.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-20T18:55:55.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T18:56:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-20T18:57:56.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T18:58:56.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T18:59:56.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T19:00:57.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T19:01:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T19:02:57.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T19:03:57.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T19:04:57.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T19:05:58.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T19:06:58.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T19:07:58.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T19:08:58.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T19:09:59.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-20T19:10:59.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T19:11:59.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-20T19:12:59.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T19:13:59.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T19:15:00.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T19:16:00.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T19:17:00.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T19:18:00.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T19:19:01.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T19:20:01.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T19:21:01.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T19:22:01.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T19:23:02.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T19:24:02.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T19:25:02.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-20T19:26:02.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T19:27:03.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-20T19:28:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T19:29:03.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T19:30:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T19:31:03.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T19:32:04.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-20T19:33:04.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T19:34:04.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T19:35:04.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T19:36:05.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T19:37:05.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T19:38:05.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-20T19:39:05.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T19:40:06.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T19:41:06.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-20T19:42:06.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T19:43:06.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T19:44:07.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T19:45:07.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T19:46:07.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-20T19:47:07.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T19:48:07.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T19:49:08.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T19:50:08.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-20T19:51:08.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T19:52:08.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T19:53:09.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T19:54:09.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T19:55:09.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T19:56:09.000Z",
        "cpu_usage": 4.6
    },
    {
        "date": "2021-05-20T19:57:09.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T19:58:10.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T19:59:10.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T20:00:10.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T20:01:10.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T20:02:11.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-20T20:03:11.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T20:04:11.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T20:05:11.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T20:06:12.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T20:07:12.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T20:08:12.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T20:09:12.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T20:10:13.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-20T20:11:13.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T20:12:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T20:13:13.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T20:14:14.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T20:15:14.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T20:16:14.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T20:17:14.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T20:18:15.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T20:19:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T20:20:15.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T20:21:15.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T20:22:16.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T20:23:16.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T20:24:16.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-20T20:25:16.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-20T20:26:16.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T20:27:17.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T20:28:17.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T20:29:17.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T20:30:17.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-20T20:31:18.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T20:32:18.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T20:33:18.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T20:34:18.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T20:35:18.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T20:36:19.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T20:37:19.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T20:38:19.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T20:39:19.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T20:40:20.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T20:41:20.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T20:42:20.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T20:43:20.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T20:44:21.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T20:45:21.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T20:46:21.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T20:47:21.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T20:48:22.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T20:49:22.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T20:50:22.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T20:51:22.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T20:52:23.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T20:53:23.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T20:54:23.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T20:55:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-20T20:56:23.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T20:57:24.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T20:58:24.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-20T20:59:24.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T21:00:24.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:01:25.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T21:02:25.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:03:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T21:04:25.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T21:05:25.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T21:06:26.000Z",
        "cpu_usage": 4.8
    },
    {
        "date": "2021-05-20T21:07:26.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-20T21:08:26.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T21:09:26.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T21:10:27.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T21:11:27.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T21:12:27.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:13:27.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T21:14:28.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T21:15:28.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:16:28.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:17:28.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:18:29.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T21:19:29.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T21:20:29.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-20T21:21:29.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T21:22:29.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:23:30.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T21:24:30.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T21:25:30.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T21:26:30.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T21:27:31.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T21:28:31.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-20T21:29:31.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T21:30:31.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T21:31:32.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T21:32:32.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T21:33:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T21:34:32.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T21:35:32.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T21:36:33.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-20T21:37:33.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T21:38:33.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T21:39:33.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-20T21:40:33.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T21:41:34.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:42:34.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T21:43:34.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T21:44:34.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T21:45:35.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:46:35.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T21:47:35.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:48:35.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T21:49:36.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:50:36.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T21:51:36.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T21:52:36.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:53:37.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T21:54:37.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-20T21:55:37.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-20T21:56:37.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:57:37.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T21:58:38.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-20T21:59:38.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T22:00:38.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-20T22:01:38.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T22:02:39.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T22:03:39.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T22:04:39.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T22:05:39.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T22:06:40.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T22:07:40.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T22:08:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T22:09:40.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-20T22:10:40.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T22:11:41.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T22:12:41.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T22:13:41.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-20T22:14:41.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T22:15:41.000Z",
        "cpu_usage": 4.7
    },
    {
        "date": "2021-05-20T22:16:42.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T22:17:42.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T22:18:42.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T22:19:42.000Z",
        "cpu_usage": 4.7
    },
    {
        "date": "2021-05-20T22:20:43.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T22:21:43.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T22:22:43.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T22:23:43.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T22:24:44.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-20T22:25:44.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T22:26:44.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T22:27:44.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T22:28:45.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-20T22:29:45.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T22:30:45.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T22:31:45.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T22:32:46.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T22:33:46.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-20T22:34:46.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T22:35:46.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T22:36:46.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T22:37:47.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T22:38:47.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-20T22:39:47.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-20T22:40:47.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T22:41:48.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-20T22:42:48.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T22:43:48.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-20T22:44:48.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T22:45:48.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T22:46:49.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T22:47:49.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T22:48:49.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T22:49:49.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T22:50:49.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T22:51:50.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T22:52:50.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T22:53:50.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-20T22:54:50.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-20T22:55:51.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T22:56:51.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T22:57:51.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T22:58:51.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-20T22:59:52.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T23:00:52.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T23:01:52.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T23:02:52.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T23:03:53.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T23:04:53.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T23:05:53.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T23:06:53.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T23:07:53.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T23:08:54.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T23:09:54.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-20T23:10:54.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T23:11:54.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T23:12:55.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T23:13:55.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T23:14:55.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T23:15:55.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T23:16:55.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T23:17:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-20T23:18:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-20T23:19:56.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T23:20:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-20T23:21:57.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T23:22:57.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T23:23:57.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T23:24:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-20T23:25:58.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T23:26:58.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T23:27:58.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T23:28:58.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-20T23:29:58.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-20T23:30:59.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T23:31:59.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-20T23:32:59.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T23:33:59.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-20T23:35:00.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T23:36:00.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T23:37:00.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T23:38:00.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T23:39:01.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T23:40:01.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-20T23:41:01.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T23:42:01.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-20T23:43:02.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T23:44:02.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T23:45:02.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-20T23:46:02.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T23:47:02.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-20T23:48:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T23:49:03.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-20T23:50:03.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-20T23:51:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T23:52:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T23:53:04.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T23:54:04.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T23:55:04.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-20T23:56:04.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-20T23:57:04.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-20T23:58:05.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-20T23:59:05.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T00:00:05.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T00:01:05.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T00:02:06.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T00:03:06.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T00:04:06.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T00:05:06.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T00:06:07.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T00:07:07.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T00:08:07.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T00:09:07.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T00:10:07.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-21T00:11:08.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T00:12:08.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T00:13:08.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T00:14:08.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T00:15:09.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T00:16:09.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T00:17:09.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T00:18:09.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T00:19:10.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T00:20:10.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T00:21:10.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T00:22:10.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T00:23:10.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T00:24:11.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T00:25:11.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T00:26:11.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T00:27:11.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T00:28:11.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T00:29:12.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T00:30:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T00:31:12.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T00:32:12.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T00:33:12.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T00:34:13.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T00:35:13.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T00:36:13.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T00:37:13.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T00:38:14.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T00:39:14.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T00:40:14.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T00:41:14.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T00:42:15.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T00:43:15.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T00:44:15.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T00:45:15.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T00:46:16.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T00:47:16.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T00:48:16.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T00:49:16.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T00:50:16.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T00:51:17.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T00:52:17.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T00:53:17.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T00:54:17.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T00:55:18.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T00:56:18.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T00:57:18.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T00:58:18.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T00:59:18.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T01:00:19.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T01:01:19.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T01:02:19.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T01:03:19.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T01:04:19.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T01:05:20.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T01:06:20.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T01:07:20.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T01:08:20.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T01:09:21.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T01:10:21.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T01:11:21.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T01:12:21.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T01:13:21.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T01:14:22.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T01:15:22.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T01:16:22.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T01:17:22.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T01:18:23.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T01:19:23.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T01:20:23.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T01:21:23.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T01:22:24.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T01:23:24.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T01:24:24.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T01:25:24.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-21T01:26:24.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T01:27:25.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T01:28:25.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T01:29:25.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T01:30:25.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T01:31:26.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T01:32:26.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T01:33:26.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T01:34:26.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T01:35:26.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T01:36:27.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T01:37:27.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T01:38:27.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T01:39:27.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T01:40:27.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-21T01:41:28.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T01:42:28.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T01:43:28.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T01:44:28.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T01:45:29.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T01:46:29.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T01:47:29.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-21T01:48:29.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T01:49:29.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T01:50:30.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T01:51:30.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T01:52:30.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T01:53:30.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T01:54:31.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T01:55:31.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T01:56:31.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T01:57:31.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T01:58:32.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T01:59:32.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T02:00:32.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-21T02:01:32.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T02:02:33.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T02:03:33.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T02:04:33.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T02:05:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T02:06:33.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T02:07:34.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T02:08:34.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T02:09:34.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T02:10:34.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T02:11:34.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T02:12:35.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T02:13:35.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T02:14:35.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T02:15:35.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T02:16:36.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T02:17:36.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T02:18:36.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T02:19:36.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T02:20:36.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T02:21:37.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T02:22:37.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T02:23:37.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T02:24:37.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T02:25:37.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T02:26:38.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T02:27:38.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T02:28:38.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T02:29:38.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T02:30:39.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T02:31:39.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T02:32:39.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T02:33:39.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T02:34:40.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T02:35:40.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T02:36:40.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T02:37:40.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T02:38:40.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T02:39:41.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T02:40:41.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T02:41:41.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T02:42:41.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T02:43:41.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T02:44:42.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T02:45:42.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T02:46:42.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T02:47:42.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T02:48:42.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T02:49:43.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T02:50:43.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T02:51:43.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T02:52:43.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T02:53:44.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T02:54:44.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T02:55:44.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T02:56:44.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T02:57:44.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T02:58:45.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T02:59:45.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-21T03:00:45.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T03:01:45.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T03:02:46.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T03:03:46.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T03:04:46.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T03:05:46.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T03:06:47.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T03:07:47.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T03:08:47.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T03:09:47.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T03:10:47.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T03:11:48.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T03:12:48.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T03:13:48.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T03:14:48.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T03:15:49.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T03:16:49.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T03:17:49.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T03:18:49.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T03:19:49.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T03:20:50.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T03:21:50.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T03:22:50.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T03:23:50.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T03:24:50.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T03:25:51.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T03:26:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T03:27:51.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T03:28:51.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T03:29:52.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T03:30:52.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T03:31:52.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T03:32:52.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T03:33:52.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T03:34:53.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T03:35:53.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T03:36:53.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T03:37:53.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T03:38:54.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T03:39:54.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T03:40:54.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T03:41:54.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T03:42:54.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T03:43:55.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T03:44:55.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T03:45:55.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T03:46:55.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T03:47:56.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T03:48:56.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T03:49:56.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T03:50:56.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T03:51:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T03:52:57.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T03:53:57.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T03:54:57.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T03:55:57.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T03:56:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T03:57:58.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T03:58:58.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T03:59:58.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T04:00:58.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T04:01:59.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T04:02:59.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T04:03:59.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T04:04:59.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T04:05:59.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T04:07:00.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T04:08:00.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T04:09:00.000Z",
        "cpu_usage": 4.6
    },
    {
        "date": "2021-05-21T04:10:00.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T04:11:01.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T04:12:01.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T04:13:01.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T04:14:01.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T04:15:02.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T04:16:02.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T04:17:02.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T04:18:02.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T04:19:03.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T04:20:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T04:21:03.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T04:22:03.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T04:23:03.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T04:24:04.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T04:25:04.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T04:26:04.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T04:27:04.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T04:28:05.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T04:29:05.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T04:30:05.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T04:31:05.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T04:32:06.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T04:33:06.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T04:34:06.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T04:35:06.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T04:36:07.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T04:37:07.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T04:38:07.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T04:39:07.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T04:40:08.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T04:41:08.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T04:42:08.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T04:43:08.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T04:44:09.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T04:45:09.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T04:46:09.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T04:47:09.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T04:48:10.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T04:49:10.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T04:50:10.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T04:51:10.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T04:52:11.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T04:53:11.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T04:54:11.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T04:55:11.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T04:56:12.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T04:57:12.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T04:58:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T04:59:12.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T05:00:13.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T05:01:13.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T05:02:13.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T05:03:13.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T05:04:14.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T05:05:14.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T05:06:14.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T05:07:14.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T05:08:14.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T05:09:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T05:10:15.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T05:11:15.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T05:12:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T05:13:16.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T05:14:16.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T05:15:16.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T05:16:16.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T05:17:17.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T05:18:17.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T05:19:17.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T05:20:17.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T05:21:18.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T05:22:18.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T05:23:18.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T05:24:18.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T05:25:19.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T05:26:19.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T05:27:19.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T05:28:19.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T05:29:20.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T05:30:20.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T05:31:20.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T05:32:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T05:33:21.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T05:34:21.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T05:35:21.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T05:36:21.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T05:37:22.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T05:38:22.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T05:39:22.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T05:40:22.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T05:41:22.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-21T05:42:23.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T05:43:23.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T05:44:23.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T05:45:23.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T05:46:24.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T05:47:24.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T05:48:24.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T05:49:24.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T05:50:25.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T05:51:25.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T05:52:25.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T05:53:25.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T05:54:26.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T05:55:26.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T05:56:26.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T05:57:26.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T05:58:26.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T05:59:27.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T06:00:27.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T06:01:27.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T06:02:27.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T06:03:28.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T06:04:28.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T06:05:28.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T06:06:28.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T06:07:29.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T06:08:29.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T06:09:29.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T06:10:29.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T06:11:30.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T06:12:30.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T06:13:30.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T06:14:30.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T06:15:31.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T06:16:31.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T06:17:31.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T06:18:31.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T06:19:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T06:20:32.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T06:21:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T06:22:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T06:23:32.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T06:24:33.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T06:25:33.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-21T06:26:33.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T06:27:33.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T06:28:34.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T06:29:34.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T06:30:34.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T06:31:34.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T06:32:34.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T06:33:35.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T06:34:35.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T06:35:35.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T06:36:35.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T06:37:36.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T06:38:36.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T06:39:36.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T06:40:36.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T06:41:37.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T06:42:37.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T06:43:37.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T06:44:37.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T06:45:38.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T06:46:38.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T06:47:38.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T06:48:38.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T06:49:39.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T06:50:39.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T06:51:39.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T06:52:39.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T06:53:40.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T06:54:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T06:55:40.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-21T06:56:40.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T06:57:41.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T06:58:41.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T06:59:41.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T07:00:41.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T07:01:42.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T07:02:42.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T07:03:42.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T07:04:42.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T07:05:42.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T07:06:43.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T07:07:43.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T07:08:43.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T07:09:43.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T07:10:44.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T07:11:44.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T07:12:44.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T07:13:44.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T07:14:45.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T07:15:45.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T07:16:45.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T07:17:45.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T07:18:46.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T07:19:46.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T07:20:46.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T07:21:46.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T07:22:47.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T07:23:47.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T07:24:47.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T07:25:47.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T07:26:48.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T07:27:48.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T07:28:48.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T07:29:48.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T07:30:49.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T07:31:49.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T07:32:49.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T07:33:49.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T07:34:49.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T07:35:50.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T07:36:50.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T07:37:50.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T07:38:50.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T07:39:50.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T07:40:51.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T07:41:51.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T07:42:51.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T07:43:51.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T07:44:52.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T07:45:52.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T07:46:52.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T07:47:52.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T07:48:53.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T07:49:53.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T07:50:53.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T07:51:53.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T07:52:54.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T07:53:54.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T07:54:54.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T07:55:54.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T07:56:55.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T07:57:55.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T07:58:55.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T07:59:55.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T08:00:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T08:01:56.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T08:02:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T08:03:56.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T08:04:56.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T08:05:57.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T08:06:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T08:07:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T08:08:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T08:09:57.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T08:10:58.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T08:11:58.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T08:12:58.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T08:13:58.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T08:14:59.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T08:15:59.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T08:16:59.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T08:17:59.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T08:19:00.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T08:20:00.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T08:21:00.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T08:22:00.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T08:23:01.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T08:24:01.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T08:25:01.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T08:26:01.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T08:27:02.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T08:28:02.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T08:29:02.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T08:30:02.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T08:31:02.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T08:32:03.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T08:33:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T08:34:03.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T08:35:03.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T08:36:04.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T08:37:04.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T08:38:04.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T08:39:04.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T08:40:05.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T08:41:05.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T08:42:05.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T08:43:05.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T08:44:05.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T08:45:06.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T08:46:06.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T08:47:06.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T08:48:06.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T08:49:07.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T08:50:07.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T08:51:07.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T08:52:07.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T08:53:08.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T08:54:08.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T08:55:08.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T08:56:08.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T08:57:08.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T08:58:09.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T08:59:09.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T09:00:09.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T09:01:09.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T09:02:10.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T09:03:10.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T09:04:10.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T09:05:10.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T09:06:11.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T09:07:11.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T09:08:11.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T09:09:11.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T09:10:12.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T09:11:12.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T09:12:12.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T09:13:12.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T09:14:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T09:15:13.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T09:16:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T09:17:13.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T09:18:13.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T09:19:14.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T09:20:14.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T09:21:14.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T09:22:14.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T09:23:14.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T09:24:15.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T09:25:15.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T09:26:15.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T09:27:15.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T09:28:16.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T09:29:16.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T09:30:16.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T09:31:16.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T09:32:17.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T09:33:17.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T09:34:17.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T09:35:17.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T09:36:18.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T09:37:18.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T09:38:18.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T09:39:18.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T09:40:19.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T09:41:19.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T09:42:19.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T09:43:19.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T09:44:19.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T09:45:20.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T09:46:20.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T09:47:20.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T09:48:20.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T09:49:21.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T09:50:21.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T09:51:21.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T09:52:21.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T09:53:21.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T09:54:22.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T09:55:22.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T09:56:22.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T09:57:22.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T09:58:23.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T09:59:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T10:00:23.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-21T10:01:23.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T10:02:23.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T10:03:24.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T10:04:24.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T10:05:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T10:06:24.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T10:07:25.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T10:08:25.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T10:09:25.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T10:10:25.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T10:11:26.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-21T10:12:26.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T10:13:26.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T10:14:26.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T10:15:27.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T10:16:27.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T10:17:27.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T10:18:27.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T10:19:27.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T10:20:28.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T10:21:28.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T10:22:28.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T10:23:28.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T10:24:29.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T10:25:29.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T10:26:29.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T10:27:29.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T10:28:29.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T10:29:30.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T10:30:30.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T10:31:30.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T10:32:30.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T10:33:31.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T10:34:31.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T10:35:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T10:36:31.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T10:37:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T10:38:32.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T10:39:32.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T10:40:32.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T10:41:32.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-21T10:42:33.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T10:43:33.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T10:44:33.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T10:45:33.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T10:46:34.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T10:47:34.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T10:48:34.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T10:49:34.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T10:50:35.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T10:51:35.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T10:52:35.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T10:53:35.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T10:54:35.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T10:55:36.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T10:56:36.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-21T10:57:36.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T10:58:36.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T10:59:37.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T11:00:37.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T11:01:37.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T11:02:37.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T11:03:37.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T11:04:38.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T11:05:38.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T11:06:38.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T11:07:38.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T11:08:39.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T11:09:39.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T11:10:39.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T11:11:39.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-21T11:12:39.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T11:13:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T11:14:40.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T11:15:40.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T11:16:40.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T11:17:41.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T11:18:41.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T11:19:41.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T11:20:41.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T11:21:42.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T11:22:42.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T11:23:42.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T11:24:42.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T11:25:43.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T11:26:43.000Z",
        "cpu_usage": 8
    },
    {
        "date": "2021-05-21T11:27:43.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T11:28:43.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T11:29:43.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T11:30:44.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T11:31:44.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T11:32:44.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T11:33:44.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T11:34:44.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T11:35:45.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T11:36:45.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T11:37:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T11:38:45.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T11:39:46.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T11:40:46.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T11:41:46.000Z",
        "cpu_usage": 8.5
    },
    {
        "date": "2021-05-21T11:42:46.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T11:43:46.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T11:44:47.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T11:45:47.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T11:46:47.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T11:47:47.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T11:48:48.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T11:49:48.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T11:50:48.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T11:51:48.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T11:52:49.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T11:53:49.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T11:54:49.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T11:55:49.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T11:56:49.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-21T11:57:50.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T11:58:50.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T11:59:50.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T12:00:50.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T12:01:51.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T12:02:51.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T12:03:51.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T12:04:51.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T12:05:51.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T12:06:52.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T12:07:52.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T12:08:52.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T12:09:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T12:10:53.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T12:11:53.000Z",
        "cpu_usage": 8
    },
    {
        "date": "2021-05-21T12:12:53.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T12:13:53.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T12:14:53.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T12:15:54.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T12:16:54.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T12:17:54.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T12:18:54.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T12:19:55.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T12:20:55.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T12:21:55.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T12:22:55.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T12:23:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T12:24:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T12:25:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T12:26:56.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-21T12:27:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T12:28:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T12:29:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T12:30:57.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T12:31:57.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T12:32:58.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T12:33:58.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T12:34:58.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T12:35:58.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T12:36:58.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T12:37:59.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T12:38:59.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T12:39:59.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T12:40:59.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T12:42:00.000Z",
        "cpu_usage": 8.2
    },
    {
        "date": "2021-05-21T12:43:00.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T12:44:00.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T12:45:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T12:46:00.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T12:47:01.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T12:48:01.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T12:49:01.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T12:50:01.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T12:51:02.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T12:52:02.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T12:53:02.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T12:54:02.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T12:55:02.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T12:56:03.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T12:57:03.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T12:58:03.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T12:59:03.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T13:00:04.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T13:01:04.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T13:02:04.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T13:03:04.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T13:04:04.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T13:05:05.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T13:06:05.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T13:07:05.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T13:08:05.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T13:09:05.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T13:10:06.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T13:11:06.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T13:12:06.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T13:13:06.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T13:14:07.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T13:15:07.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T13:16:07.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T13:17:07.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T13:18:07.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T13:19:08.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T13:20:08.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T13:21:08.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T13:22:08.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T13:23:09.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T13:24:09.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T13:25:09.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T13:26:09.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T13:27:10.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T13:28:10.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T13:29:10.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T13:30:10.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T13:31:11.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T13:32:11.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T13:33:11.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T13:34:11.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T13:35:12.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T13:36:12.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T13:37:12.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T13:38:12.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T13:39:13.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T13:40:13.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T13:41:13.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T13:42:13.000Z",
        "cpu_usage": 8.1
    },
    {
        "date": "2021-05-21T13:43:14.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T13:44:14.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T13:45:14.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T13:46:14.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T13:47:15.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T13:48:15.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T13:49:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T13:50:15.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T13:51:16.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T13:52:16.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T13:53:16.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T13:54:16.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T13:55:16.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T13:56:17.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T13:57:17.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T13:58:17.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T13:59:17.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T14:00:18.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T14:01:18.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T14:02:18.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T14:03:18.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T14:04:19.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T14:05:19.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T14:06:19.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T14:07:19.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T14:08:20.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T14:09:20.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T14:10:20.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T14:11:20.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-21T14:12:21.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T14:13:21.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T14:14:21.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T14:15:21.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T14:16:21.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T14:17:22.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T14:18:22.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-21T14:19:22.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T14:20:22.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T14:21:23.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T14:22:23.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T14:23:23.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T14:24:23.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T14:25:24.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T14:26:24.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T14:27:24.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T14:28:24.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T14:29:25.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T14:30:25.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T14:31:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T14:32:25.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T14:33:26.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T14:34:26.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T14:35:26.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T14:36:26.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T14:37:26.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T14:38:27.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T14:39:27.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T14:40:27.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T14:41:27.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T14:42:28.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T14:43:28.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T14:44:28.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T14:45:28.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T14:46:29.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T14:47:29.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T14:48:29.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T14:49:29.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T14:50:29.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T14:51:30.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T14:52:30.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T14:53:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T14:54:30.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T14:55:31.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T14:56:31.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T14:57:31.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T14:58:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T14:59:32.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T15:00:32.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T15:01:32.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T15:02:32.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T15:03:33.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T15:04:33.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T15:05:33.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T15:06:33.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T15:07:34.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T15:08:34.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T15:09:34.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T15:10:34.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T15:11:34.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T15:12:35.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T15:13:35.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T15:14:35.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T15:15:35.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T15:16:35.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T15:17:36.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T15:18:36.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T15:19:36.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T15:20:36.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T15:21:37.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T15:22:37.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T15:23:37.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T15:24:37.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T15:25:38.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T15:26:38.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T15:27:38.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T15:28:38.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T15:29:39.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T15:30:39.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T15:31:39.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T15:32:39.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T15:33:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T15:34:40.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T15:35:40.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T15:36:40.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T15:37:41.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T15:38:41.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T15:39:41.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T15:40:41.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T15:41:42.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-21T15:42:42.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T15:43:42.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T15:44:42.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T15:45:42.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T15:46:43.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T15:47:43.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T15:48:43.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T15:49:43.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T15:50:43.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T15:51:44.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T15:52:44.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T15:53:44.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T15:54:44.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T15:55:45.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T15:56:45.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T15:57:45.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T15:58:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T15:59:46.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T16:00:46.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T16:01:46.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T16:02:46.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T16:03:47.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T16:04:47.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T16:05:47.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T16:06:47.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T16:07:48.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T16:08:48.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T16:09:48.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T16:10:48.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T16:11:49.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T16:12:49.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T16:13:49.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T16:14:49.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-21T16:15:50.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T16:16:50.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T16:17:50.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T16:18:50.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T16:19:50.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T16:20:51.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T16:21:51.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T16:22:51.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T16:23:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T16:24:52.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T16:25:52.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T16:26:52.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T16:27:52.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T16:28:52.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T16:29:53.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T16:30:53.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T16:31:53.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T16:32:53.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T16:33:54.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T16:34:54.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T16:35:54.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T16:36:54.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T16:37:55.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T16:38:55.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T16:39:55.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T16:40:55.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T16:41:56.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T16:42:56.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T16:43:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T16:44:56.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T16:45:57.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T16:46:57.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T16:47:57.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T16:48:57.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T16:49:58.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T16:50:58.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T16:51:58.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T16:52:58.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T16:53:58.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T16:54:59.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T16:55:59.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T16:56:59.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T16:57:59.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T16:59:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T17:00:00.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T17:01:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T17:02:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T17:03:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T17:04:01.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T17:05:01.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T17:06:01.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T17:07:01.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T17:08:02.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T17:09:02.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T17:10:02.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T17:11:02.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T17:12:03.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T17:13:03.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T17:14:03.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T17:15:03.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T17:16:04.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T17:17:04.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T17:18:04.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T17:19:04.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T17:20:05.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T17:21:05.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T17:22:05.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T17:23:05.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T17:24:05.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T17:25:06.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T17:26:06.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T17:27:06.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T17:28:06.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T17:29:07.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T17:30:07.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T17:31:07.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T17:32:07.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T17:33:07.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T17:34:08.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T17:35:08.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T17:36:08.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T17:37:08.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T17:38:09.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T17:39:09.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T17:40:09.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T17:41:09.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T17:42:10.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T17:43:10.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T17:44:10.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T17:45:10.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T17:46:11.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T17:47:11.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T17:48:11.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T17:49:11.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T17:50:12.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T17:51:12.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T17:52:12.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T17:53:12.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T17:54:12.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T17:55:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T17:56:13.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T17:57:13.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T17:58:13.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T17:59:14.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T18:00:14.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-21T18:01:14.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T18:02:14.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T18:03:14.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T18:04:15.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T18:05:15.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T18:06:15.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T18:07:15.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T18:08:16.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T18:09:16.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T18:10:16.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T18:11:16.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T18:12:16.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-21T18:13:17.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T18:14:17.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T18:15:17.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T18:16:17.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T18:17:18.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T18:18:18.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T18:19:18.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T18:20:18.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T18:21:19.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T18:22:19.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T18:23:19.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T18:24:19.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T18:25:20.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T18:26:20.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T18:27:20.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T18:28:20.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T18:29:21.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T18:30:21.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T18:31:21.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T18:32:21.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T18:33:21.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T18:34:22.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T18:35:22.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T18:36:22.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T18:37:22.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T18:38:23.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T18:39:23.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T18:40:23.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T18:41:23.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T18:42:23.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T18:43:24.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T18:44:24.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T18:45:24.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T18:46:24.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T18:47:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T18:48:25.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T18:49:25.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T18:50:25.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T18:51:26.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T18:52:26.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T18:53:26.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T18:54:26.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T18:55:27.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T18:56:27.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T18:57:27.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T18:58:27.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T18:59:27.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T19:00:28.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T19:01:28.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T19:02:28.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T19:03:28.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T19:04:28.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T19:05:29.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T19:06:29.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T19:07:29.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T19:08:29.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T19:09:30.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T19:10:30.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T19:11:30.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T19:12:30.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T19:13:30.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T19:14:31.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T19:15:31.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T19:16:31.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T19:17:31.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T19:18:32.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T19:19:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T19:20:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T19:21:32.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T19:22:33.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T19:23:33.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T19:24:33.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T19:25:33.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T19:26:33.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T19:27:34.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T19:28:34.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T19:29:34.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T19:30:34.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T19:31:35.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T19:32:35.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T19:33:35.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T19:34:35.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T19:35:36.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T19:36:36.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T19:37:36.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T19:38:36.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T19:39:36.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T19:40:37.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T19:41:37.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T19:42:37.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-21T19:43:37.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T19:44:37.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T19:45:38.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T19:46:38.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T19:47:38.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T19:48:38.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T19:49:39.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T19:50:39.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T19:51:39.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T19:52:39.000Z",
        "cpu_usage": 4.7
    },
    {
        "date": "2021-05-21T19:53:39.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T19:54:40.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T19:55:40.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T19:56:40.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T19:57:40.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T19:58:41.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T19:59:41.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T20:00:41.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T20:01:41.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T20:02:42.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T20:03:42.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T20:04:42.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T20:05:42.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T20:06:43.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T20:07:43.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T20:08:43.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T20:09:43.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T20:10:43.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T20:11:44.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T20:12:44.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T20:13:44.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T20:14:44.000Z",
        "cpu_usage": 4.8
    },
    {
        "date": "2021-05-21T20:15:44.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T20:16:45.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T20:17:45.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T20:18:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T20:19:45.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T20:20:46.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T20:21:46.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T20:22:46.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T20:23:46.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T20:24:46.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T20:25:47.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T20:26:47.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T20:27:47.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T20:28:47.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T20:29:48.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T20:30:48.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T20:31:48.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T20:32:48.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T20:33:49.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T20:34:49.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T20:35:49.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T20:36:49.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T20:37:49.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T20:38:50.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T20:39:50.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T20:40:50.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T20:41:50.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T20:42:50.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-21T20:43:51.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T20:44:51.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T20:45:51.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T20:46:51.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T20:47:52.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T20:48:52.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T20:49:52.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T20:50:52.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T20:51:52.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T20:52:53.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T20:53:53.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T20:54:53.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T20:55:53.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T20:56:53.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T20:57:54.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T20:58:54.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T20:59:54.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T21:00:54.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T21:01:55.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T21:02:55.000Z",
        "cpu_usage": 4.8
    },
    {
        "date": "2021-05-21T21:03:55.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T21:04:55.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T21:05:55.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T21:06:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T21:07:56.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T21:08:56.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T21:09:56.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T21:10:57.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T21:11:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T21:12:57.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T21:13:57.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T21:14:57.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T21:15:58.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T21:16:58.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T21:17:58.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T21:18:58.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T21:19:59.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T21:20:59.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T21:21:59.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T21:22:59.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T21:23:59.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T21:25:00.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T21:26:00.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T21:27:00.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T21:28:00.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-21T21:29:00.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T21:30:01.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T21:31:01.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T21:32:01.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-21T21:33:01.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T21:34:02.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T21:35:02.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T21:36:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T21:37:02.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T21:38:02.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T21:39:03.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T21:40:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T21:41:03.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T21:42:03.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-21T21:43:04.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T21:44:04.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T21:45:04.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T21:46:04.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T21:47:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T21:48:05.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T21:49:05.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T21:50:05.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T21:51:05.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T21:52:06.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T21:53:06.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T21:54:06.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T21:55:06.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T21:56:06.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T21:57:07.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T21:58:07.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T21:59:07.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T22:00:07.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T22:01:07.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T22:02:08.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T22:03:08.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T22:04:08.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T22:05:08.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T22:06:09.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T22:07:09.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T22:08:09.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T22:09:09.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T22:10:09.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T22:11:10.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T22:12:10.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T22:13:10.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T22:14:10.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T22:15:11.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T22:16:11.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-21T22:17:11.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T22:18:11.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T22:19:11.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T22:20:12.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T22:21:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T22:22:12.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T22:23:12.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T22:24:12.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T22:25:13.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T22:26:13.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T22:27:13.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-21T22:28:13.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T22:29:14.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T22:30:14.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T22:31:14.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T22:32:14.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T22:33:14.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T22:34:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T22:35:15.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T22:36:15.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T22:37:15.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-21T22:38:16.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T22:39:16.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T22:40:16.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T22:41:16.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T22:42:17.000Z",
        "cpu_usage": 8
    },
    {
        "date": "2021-05-21T22:43:17.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T22:44:17.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T22:45:17.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T22:46:18.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T22:47:18.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T22:48:18.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T22:49:18.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T22:50:19.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T22:51:19.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T22:52:19.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T22:53:19.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-21T22:54:19.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T22:55:20.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T22:56:20.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T22:57:20.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T22:58:20.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-21T22:59:21.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T23:00:21.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T23:01:21.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-21T23:02:21.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T23:03:22.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T23:04:22.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T23:05:22.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T23:06:22.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-21T23:07:23.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T23:08:23.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T23:09:23.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T23:10:23.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T23:11:24.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T23:12:24.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T23:13:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T23:14:24.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T23:15:25.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T23:16:25.000Z",
        "cpu_usage": 4.7
    },
    {
        "date": "2021-05-21T23:17:25.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T23:18:25.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T23:19:25.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T23:20:26.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T23:21:26.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T23:22:26.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T23:23:26.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T23:24:27.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-21T23:25:27.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T23:26:27.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T23:27:27.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T23:28:28.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T23:29:28.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T23:30:28.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T23:31:28.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T23:32:29.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T23:33:29.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-21T23:34:29.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T23:35:29.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T23:36:30.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-21T23:37:30.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T23:38:30.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T23:39:30.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T23:40:31.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T23:41:31.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T23:42:31.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-21T23:43:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-21T23:44:31.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T23:45:32.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T23:46:32.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-21T23:47:32.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-21T23:48:32.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-21T23:49:33.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-21T23:50:33.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T23:51:33.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-21T23:52:33.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-21T23:53:33.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T23:54:34.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-21T23:55:34.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T23:56:34.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-21T23:57:34.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-21T23:58:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-21T23:59:35.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:00:35.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T00:01:35.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T00:02:36.000Z",
        "cpu_usage": 11
    },
    {
        "date": "2021-05-22T00:03:36.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T00:04:36.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:05:36.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T00:06:37.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T00:07:37.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T00:08:37.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T00:09:37.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:10:38.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:11:38.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:12:38.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T00:13:38.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T00:14:39.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-22T00:15:39.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T00:16:39.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T00:17:39.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T00:18:40.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T00:19:40.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T00:20:40.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T00:21:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T00:22:40.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:23:41.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T00:24:41.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T00:25:41.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T00:26:41.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:27:42.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T00:28:42.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T00:29:42.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:30:42.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T00:31:42.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T00:32:43.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:33:43.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T00:34:43.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T00:35:43.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T00:36:44.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T00:37:44.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:38:44.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T00:39:44.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T00:40:45.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T00:41:45.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T00:42:45.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-22T00:43:45.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T00:44:46.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:45:46.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T00:46:46.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T00:47:46.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T00:48:47.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T00:49:47.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T00:50:47.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T00:51:47.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T00:52:48.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T00:53:48.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T00:54:48.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:55:48.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T00:56:49.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T00:57:49.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T00:58:49.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T00:59:49.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T01:00:49.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T01:01:50.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T01:02:50.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T01:03:50.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T01:04:50.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T01:05:50.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T01:06:51.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T01:07:51.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T01:08:51.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T01:09:51.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T01:10:52.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T01:11:52.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T01:12:52.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T01:13:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T01:14:53.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T01:15:53.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T01:16:53.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T01:17:53.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T01:18:54.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T01:19:54.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T01:20:54.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T01:21:54.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T01:22:55.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T01:23:55.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T01:24:55.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T01:25:55.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T01:26:55.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T01:27:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T01:28:56.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T01:29:56.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T01:30:56.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T01:31:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T01:32:57.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T01:33:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T01:34:57.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T01:35:58.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T01:36:58.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T01:37:58.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T01:38:58.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T01:39:58.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-22T01:40:59.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T01:41:59.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T01:42:59.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-22T01:43:59.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T01:45:00.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T01:46:00.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T01:47:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T01:48:00.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T01:49:01.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T01:50:01.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T01:51:01.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T01:52:01.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T01:53:02.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T01:54:02.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T01:55:02.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T01:56:02.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T01:57:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T01:58:03.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T01:59:03.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T02:00:03.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T02:01:04.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T02:02:04.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T02:03:04.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T02:04:04.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T02:05:04.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T02:06:05.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T02:07:05.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T02:08:05.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T02:09:05.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T02:10:06.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T02:11:06.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T02:12:06.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T02:13:06.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T02:14:06.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-22T02:15:07.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T02:16:07.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T02:17:07.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T02:18:07.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T02:19:08.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T02:20:08.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T02:21:08.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T02:22:08.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T02:23:09.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T02:24:09.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T02:25:09.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T02:26:09.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-22T02:27:09.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T02:28:10.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T02:29:10.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T02:30:10.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T02:31:10.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T02:32:11.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T02:33:11.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T02:34:11.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T02:35:11.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T02:36:12.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T02:37:12.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T02:38:12.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T02:39:12.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T02:40:13.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T02:41:13.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T02:42:13.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T02:43:13.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-22T02:44:13.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-22T02:45:14.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T02:46:14.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T02:47:14.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T02:48:14.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T02:49:14.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T02:50:15.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T02:51:15.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T02:52:15.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T02:53:15.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T02:54:16.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T02:55:16.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T02:56:16.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T02:57:16.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T02:58:17.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T02:59:17.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T03:00:17.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T03:01:17.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T03:02:18.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T03:03:18.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T03:04:18.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T03:05:18.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T03:06:18.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T03:07:19.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T03:08:19.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T03:09:19.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T03:10:20.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T03:11:20.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T03:12:20.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T03:13:20.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T03:14:20.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T03:15:21.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T03:16:21.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T03:17:21.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T03:18:21.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T03:19:21.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T03:20:22.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T03:21:22.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T03:22:22.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T03:23:22.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T03:24:23.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T03:25:23.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T03:26:23.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T03:27:23.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T03:28:23.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T03:29:24.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T03:30:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T03:31:24.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T03:32:24.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T03:33:25.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T03:34:25.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T03:35:25.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T03:36:25.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T03:37:26.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T03:38:26.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T03:39:26.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T03:40:26.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T03:41:27.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T03:42:27.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T03:43:27.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T03:44:27.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T03:45:27.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T03:46:28.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T03:47:28.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T03:48:28.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T03:49:28.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T03:50:29.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T03:51:29.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T03:52:29.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T03:53:29.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T03:54:29.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T03:55:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T03:56:30.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T03:57:30.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T03:58:30.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T03:59:31.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T04:00:31.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T04:01:31.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T04:02:31.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T04:03:31.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T04:04:32.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T04:05:32.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T04:06:32.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T04:07:32.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T04:08:33.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T04:09:33.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T04:10:33.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T04:11:33.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T04:12:34.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T04:13:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T04:14:34.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T04:15:34.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T04:16:35.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T04:17:35.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T04:18:35.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T04:19:35.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T04:20:36.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T04:21:36.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T04:22:36.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T04:23:36.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T04:24:36.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T04:25:37.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-22T04:26:37.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T04:27:37.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T04:28:37.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T04:29:38.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T04:30:38.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T04:31:38.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T04:32:38.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T04:33:38.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T04:34:39.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T04:35:39.000Z",
        "cpu_usage": 4.8
    },
    {
        "date": "2021-05-22T04:36:39.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T04:37:39.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T04:38:40.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T04:39:40.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T04:40:40.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T04:41:40.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T04:42:40.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T04:43:41.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T04:44:41.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T04:45:41.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T04:46:41.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T04:47:42.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T04:48:42.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T04:49:42.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T04:50:42.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T04:51:43.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T04:52:43.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T04:53:43.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T04:54:43.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T04:55:43.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T04:56:44.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T04:57:44.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T04:58:44.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T04:59:44.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T05:00:45.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T05:01:45.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T05:02:45.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T05:03:45.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T05:04:45.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T05:05:46.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T05:06:46.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T05:07:46.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T05:08:46.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T05:09:46.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-22T05:10:47.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T05:11:47.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T05:12:47.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T05:13:47.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T05:14:48.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T05:15:48.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T05:16:48.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T05:17:48.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T05:18:49.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T05:19:49.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T05:20:49.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T05:21:49.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T05:22:50.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T05:23:50.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T05:24:50.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T05:25:50.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T05:26:50.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T05:27:51.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T05:28:51.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T05:29:51.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T05:30:51.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T05:31:51.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T05:32:52.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T05:33:52.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T05:34:52.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T05:35:52.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T05:36:53.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T05:37:53.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T05:38:53.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T05:39:53.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T05:40:53.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T05:41:54.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T05:42:54.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T05:43:54.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T05:44:54.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T05:45:54.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T05:46:55.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T05:47:55.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-22T05:48:55.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T05:49:55.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T05:50:56.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T05:51:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T05:52:56.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T05:53:56.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T05:54:57.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T05:55:57.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T05:56:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T05:57:57.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T05:58:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T05:59:58.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T06:00:58.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T06:01:58.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T06:02:58.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T06:03:59.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T06:04:59.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T06:05:59.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T06:06:59.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T06:07:59.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T06:09:00.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-22T06:10:00.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T06:11:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T06:12:00.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T06:13:01.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T06:14:01.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T06:15:01.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T06:16:01.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T06:17:01.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-22T06:18:02.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T06:19:02.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-22T06:20:02.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T06:21:02.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-22T06:22:02.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T06:23:03.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T06:24:03.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T06:25:03.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T06:26:03.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T06:27:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T06:28:04.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T06:29:04.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T06:30:04.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T06:31:05.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T06:32:05.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T06:33:05.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T06:34:05.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T06:35:05.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T06:36:06.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T06:37:06.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T06:38:06.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T06:39:06.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T06:40:07.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T06:41:07.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T06:42:07.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T06:43:07.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-22T06:44:07.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T06:45:08.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T06:46:08.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T06:47:08.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T06:48:08.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T06:49:09.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T06:50:09.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T06:51:09.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T06:52:09.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T06:53:09.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T06:54:10.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T06:55:10.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T06:56:10.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T06:57:10.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T06:58:11.000Z",
        "cpu_usage": 7.9
    },
    {
        "date": "2021-05-22T06:59:11.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T07:00:11.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T07:01:11.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T07:02:11.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T07:03:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T07:04:12.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T07:05:12.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T07:06:12.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T07:07:13.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T07:08:13.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T07:09:13.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T07:10:13.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T07:11:13.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T07:12:14.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T07:13:14.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T07:14:14.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T07:15:14.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T07:16:15.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T07:17:15.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T07:18:15.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-22T07:19:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T07:20:15.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T07:21:16.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T07:22:16.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T07:23:16.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T07:24:16.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T07:25:17.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T07:26:17.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T07:27:17.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T07:28:17.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-22T07:29:17.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T07:30:18.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T07:31:18.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T07:32:18.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T07:33:18.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T07:34:19.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T07:35:19.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T07:36:19.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T07:37:19.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T07:38:19.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T07:39:20.000Z",
        "cpu_usage": 4.8
    },
    {
        "date": "2021-05-22T07:40:20.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T07:41:20.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-22T07:42:20.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T07:43:21.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-22T07:44:21.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T07:45:21.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T07:46:21.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T07:47:22.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T07:48:22.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T07:49:22.000Z",
        "cpu_usage": 4.8
    },
    {
        "date": "2021-05-22T07:50:22.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T07:51:23.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T07:52:23.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T07:53:23.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T07:54:23.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T07:55:24.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T07:56:24.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T07:57:24.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T07:58:24.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-22T07:59:24.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-22T08:00:25.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T08:01:25.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T08:02:25.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T08:03:25.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T08:04:26.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:05:26.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T08:06:26.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T08:07:26.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:08:27.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T08:09:27.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T08:10:27.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T08:11:27.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T08:12:28.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T08:13:28.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-22T08:14:28.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T08:15:28.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T08:16:29.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:17:29.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T08:18:29.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-22T08:19:29.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T08:20:30.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T08:21:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T08:22:30.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:23:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T08:24:31.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T08:25:31.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T08:26:31.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T08:27:31.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T08:28:32.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-22T08:29:32.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T08:30:32.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T08:31:32.000Z",
        "cpu_usage": 4.8
    },
    {
        "date": "2021-05-22T08:32:32.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:33:33.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T08:34:33.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:35:33.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:36:33.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T08:37:34.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T08:38:34.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T08:39:34.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T08:40:34.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:41:35.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T08:42:35.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T08:43:35.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T08:44:35.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:45:36.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:46:36.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T08:47:36.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T08:48:36.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T08:49:36.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:50:37.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T08:51:37.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:52:37.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:53:37.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T08:54:38.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T08:55:38.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T08:56:38.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T08:57:38.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T08:58:39.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-22T08:59:39.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T09:00:39.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T09:01:39.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T09:02:40.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T09:03:40.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T09:04:40.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T09:05:40.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T09:06:40.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T09:07:41.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T09:08:41.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T09:09:41.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T09:10:41.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T09:11:42.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T09:12:42.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T09:13:42.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-22T09:14:42.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T09:15:43.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T09:16:43.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T09:17:43.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T09:18:43.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T09:19:44.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T09:20:44.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T09:21:44.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T09:22:44.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T09:23:45.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T09:24:45.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T09:25:45.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T09:26:45.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T09:27:46.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T09:28:46.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-22T09:29:46.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T09:30:46.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T09:31:47.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T09:32:47.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T09:33:47.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T09:34:47.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T09:35:47.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T09:36:48.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T09:37:48.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T09:38:48.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T09:39:48.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T09:40:49.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T09:41:49.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T09:42:49.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T09:43:49.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T09:44:49.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T09:45:50.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T09:46:50.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T09:47:50.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T09:48:50.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T09:49:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T09:50:51.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T09:51:51.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T09:52:51.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T09:53:52.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T09:54:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T09:55:52.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T09:56:52.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T09:57:53.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T09:58:53.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T09:59:53.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T10:00:53.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T10:01:54.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T10:02:54.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T10:03:54.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T10:04:54.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T10:05:55.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T10:06:55.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T10:07:55.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T10:08:55.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T10:09:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T10:10:56.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T10:11:56.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T10:12:56.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T10:13:56.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T10:14:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T10:15:57.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T10:16:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T10:17:57.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T10:18:58.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T10:19:58.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T10:20:58.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T10:21:58.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T10:22:58.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T10:23:59.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T10:24:59.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T10:25:59.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T10:26:59.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T10:28:00.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T10:29:00.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T10:30:00.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T10:31:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T10:32:01.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T10:33:01.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T10:34:01.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T10:35:01.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T10:36:02.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T10:37:02.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T10:38:02.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T10:39:02.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T10:40:03.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T10:41:03.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T10:42:03.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T10:43:03.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T10:44:04.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T10:45:04.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T10:46:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T10:47:04.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T10:48:04.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T10:49:05.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T10:50:05.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T10:51:05.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T10:52:05.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T10:53:06.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T10:54:06.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T10:55:06.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T10:56:06.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T10:57:06.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T10:58:07.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T10:59:07.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-22T11:00:07.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T11:01:07.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T11:02:08.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T11:03:08.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T11:04:08.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T11:05:08.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T11:06:09.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T11:07:09.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T11:08:09.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T11:09:09.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T11:10:10.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T11:11:10.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T11:12:10.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T11:13:10.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T11:14:11.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T11:15:11.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T11:16:11.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T11:17:11.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T11:18:12.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T11:19:12.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T11:20:12.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T11:21:12.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T11:22:12.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T11:23:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T11:24:13.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T11:25:13.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T11:26:13.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T11:27:14.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T11:28:14.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T11:29:14.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-22T11:30:14.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T11:31:14.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T11:32:15.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T11:33:15.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T11:34:15.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T11:35:15.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T11:36:16.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T11:37:16.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T11:38:16.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T11:39:16.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T11:40:17.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T11:41:17.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T11:42:17.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T11:43:17.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T11:44:18.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T11:45:18.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T11:46:18.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T11:47:18.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T11:48:19.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T11:49:19.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T11:50:19.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T11:51:19.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T11:52:20.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T11:53:20.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T11:54:20.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T11:55:20.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T11:56:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T11:57:21.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T11:58:21.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T11:59:21.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-22T12:00:21.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T12:01:22.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T12:02:22.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T12:03:22.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T12:04:22.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T12:05:22.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T12:06:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T12:07:23.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T12:08:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T12:09:23.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T12:10:24.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T12:11:24.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T12:12:24.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T12:13:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T12:14:25.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T12:15:25.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T12:16:25.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T12:17:25.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T12:18:26.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T12:19:26.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T12:20:26.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T12:21:26.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T12:22:27.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T12:23:27.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T12:24:27.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T12:25:27.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T12:26:27.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T12:27:28.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T12:28:28.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T12:29:28.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-22T12:30:28.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T12:31:28.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T12:32:29.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T12:33:29.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T12:34:29.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T12:35:29.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T12:36:30.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T12:37:30.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T12:38:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T12:39:30.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T12:40:31.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T12:41:31.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T12:42:31.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T12:43:31.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T12:44:32.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T12:45:32.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T12:46:32.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T12:47:32.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T12:48:33.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T12:49:33.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T12:50:33.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T12:51:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T12:52:33.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T12:53:34.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T12:54:34.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T12:55:34.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T12:56:34.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T12:57:35.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T12:58:35.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T12:59:35.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T13:00:35.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T13:01:35.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T13:02:36.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T13:03:36.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T13:04:36.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T13:05:36.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T13:06:36.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T13:07:37.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T13:08:37.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T13:09:37.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T13:10:37.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T13:11:38.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T13:12:38.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T13:13:38.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T13:14:38.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T13:15:39.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T13:16:39.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T13:17:39.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T13:18:39.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T13:19:40.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T13:20:40.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T13:21:40.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T13:22:40.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T13:23:41.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T13:24:41.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T13:25:41.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T13:26:41.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T13:27:41.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T13:28:42.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T13:29:42.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T13:30:42.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T13:31:42.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-22T13:32:43.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T13:33:43.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T13:34:43.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T13:35:43.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T13:36:43.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T13:37:44.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T13:38:44.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T13:39:44.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T13:40:44.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T13:41:45.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T13:42:45.000Z",
        "cpu_usage": 4.8
    },
    {
        "date": "2021-05-22T13:43:45.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T13:44:45.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T13:45:45.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T13:46:46.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T13:47:46.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T13:48:46.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T13:49:46.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T13:50:47.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T13:51:47.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T13:52:47.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T13:53:47.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T13:54:48.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T13:55:48.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T13:56:48.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T13:57:48.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T13:58:48.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-22T13:59:49.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T14:00:49.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T14:01:49.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T14:02:49.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T14:03:50.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T14:04:50.000Z",
        "cpu_usage": 4.8
    },
    {
        "date": "2021-05-22T14:05:50.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T14:06:50.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T14:07:50.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T14:08:51.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T14:09:51.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T14:10:51.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T14:11:51.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T14:12:52.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T14:13:52.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-22T14:14:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T14:15:52.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T14:16:52.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T14:17:53.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T14:18:53.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-22T14:19:53.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T14:20:53.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T14:21:54.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T14:22:54.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T14:23:54.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T14:24:54.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T14:25:55.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T14:26:55.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T14:27:55.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T14:28:55.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T14:29:55.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T14:30:56.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T14:31:56.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T14:32:56.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T14:33:56.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T14:34:57.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T14:35:57.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T14:36:57.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T14:37:57.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T14:38:57.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T14:39:58.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T14:40:58.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T14:41:58.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T14:42:58.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T14:43:58.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T14:44:59.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T14:45:59.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T14:46:59.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T14:47:59.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T14:49:00.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T14:50:00.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T14:51:00.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T14:52:00.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T14:53:00.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T14:54:01.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T14:55:01.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T14:56:01.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T14:57:01.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T14:58:02.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T14:59:02.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T15:00:02.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T15:01:02.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T15:02:03.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T15:03:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T15:04:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T15:05:03.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T15:06:04.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T15:07:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T15:08:04.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T15:09:04.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T15:10:04.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T15:11:05.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T15:12:05.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T15:13:05.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T15:14:05.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T15:15:05.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T15:16:06.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T15:17:06.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T15:18:06.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T15:19:06.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T15:20:07.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T15:21:07.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T15:22:07.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T15:23:07.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T15:24:07.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T15:25:08.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T15:26:08.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T15:27:08.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T15:28:08.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T15:29:09.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T15:30:09.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T15:31:09.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T15:32:09.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T15:33:10.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T15:34:10.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T15:35:10.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T15:36:10.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T15:37:10.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T15:38:11.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T15:39:11.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T15:40:11.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T15:41:11.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T15:42:11.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T15:43:12.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T15:44:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T15:45:12.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T15:46:12.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T15:47:13.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T15:48:13.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T15:49:13.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T15:50:13.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T15:51:13.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T15:52:14.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T15:53:14.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T15:54:14.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T15:55:14.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T15:56:15.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T15:57:15.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T15:58:15.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T15:59:15.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T16:00:15.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T16:01:16.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T16:02:16.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T16:03:16.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T16:04:16.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T16:05:17.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T16:06:17.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T16:07:17.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T16:08:17.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T16:09:17.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T16:10:18.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T16:11:18.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T16:12:18.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T16:13:18.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T16:14:19.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T16:15:19.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T16:16:19.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T16:17:19.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T16:18:19.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-22T16:19:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T16:20:20.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T16:21:20.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T16:22:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T16:23:21.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T16:24:21.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T16:25:21.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T16:26:21.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T16:27:21.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T16:28:22.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T16:29:22.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-22T16:30:22.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T16:31:22.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T16:32:22.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T16:33:23.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-22T16:34:23.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T16:35:23.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T16:36:23.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T16:37:24.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T16:38:24.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-22T16:39:24.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T16:40:24.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T16:41:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T16:42:25.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T16:43:25.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-22T16:44:25.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-22T16:45:25.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T16:46:26.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T16:47:26.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T16:48:26.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-22T16:49:26.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T16:50:27.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T16:51:27.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T16:52:27.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T16:53:27.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T16:54:28.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T16:55:28.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T16:56:28.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T16:57:28.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T16:58:29.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T16:59:29.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T17:00:29.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T17:01:29.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T17:02:30.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T17:03:30.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T17:04:30.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T17:05:30.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T17:06:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T17:07:31.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T17:08:31.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T17:09:31.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T17:10:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T17:11:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T17:12:32.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T17:13:32.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T17:14:33.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T17:15:33.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T17:16:33.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T17:17:33.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T17:18:34.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T17:19:34.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-22T17:20:34.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T17:21:34.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T17:22:35.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T17:23:35.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T17:24:35.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T17:25:35.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T17:26:36.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T17:27:36.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T17:28:36.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T17:29:36.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T17:30:37.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T17:31:37.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T17:32:37.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T17:33:37.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T17:34:38.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T17:35:38.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T17:36:38.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T17:37:38.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T17:38:39.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T17:39:39.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T17:40:39.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T17:41:39.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T17:42:39.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T17:43:40.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-22T17:44:40.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T17:45:40.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T17:46:40.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T17:47:41.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T17:48:41.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T17:49:41.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T17:50:41.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T17:51:42.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T17:52:42.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T17:53:42.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T17:54:42.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T17:55:43.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T17:56:43.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T17:57:43.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T17:58:43.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T17:59:44.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T18:00:44.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-22T18:01:44.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T18:02:44.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T18:03:45.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T18:04:45.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T18:05:45.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T18:06:45.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T18:07:46.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T18:08:46.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T18:09:46.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T18:10:46.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T18:11:47.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-22T18:12:47.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T18:13:47.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T18:14:47.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T18:15:47.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T18:16:48.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T18:17:48.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T18:18:48.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T18:19:48.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T18:20:49.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T18:21:49.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T18:22:49.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T18:23:49.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T18:24:50.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T18:25:50.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T18:26:50.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T18:27:50.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T18:28:51.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-22T18:29:51.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T18:30:51.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T18:31:51.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T18:32:52.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T18:33:52.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T18:34:52.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T18:35:52.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T18:36:53.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T18:37:53.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T18:38:53.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T18:39:53.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T18:40:54.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T18:41:54.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T18:42:54.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T18:43:54.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T18:44:55.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-22T18:45:55.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T18:46:55.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T18:47:55.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T18:48:56.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T18:49:56.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T18:50:56.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T18:51:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T18:52:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T18:53:57.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T18:54:57.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T18:55:57.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T18:56:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T18:57:58.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T18:58:58.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T18:59:58.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-22T19:00:58.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T19:01:59.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T19:02:59.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T19:03:59.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T19:04:59.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T19:06:00.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T19:07:00.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T19:08:00.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T19:09:00.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T19:10:01.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T19:11:01.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T19:12:01.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T19:13:01.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T19:14:02.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T19:15:02.000Z",
        "cpu_usage": 8.1
    },
    {
        "date": "2021-05-22T19:16:02.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T19:17:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T19:18:03.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T19:19:03.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T19:20:03.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T19:21:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T19:22:04.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T19:23:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T19:24:04.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T19:25:04.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T19:26:05.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T19:27:05.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T19:28:05.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T19:29:05.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T19:30:05.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-22T19:31:06.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T19:32:06.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T19:33:06.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T19:34:06.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T19:35:07.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T19:36:07.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T19:37:07.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T19:38:07.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T19:39:08.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T19:40:08.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T19:41:08.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T19:42:08.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T19:43:09.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T19:44:09.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T19:45:09.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T19:46:09.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T19:47:10.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T19:48:10.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T19:49:10.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T19:50:10.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T19:51:11.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T19:52:11.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T19:53:11.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T19:54:11.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T19:55:12.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T19:56:12.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T19:57:12.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T19:58:12.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T19:59:13.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T20:00:13.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-22T20:01:13.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T20:02:13.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T20:03:14.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T20:04:14.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T20:05:14.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T20:06:14.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-22T20:07:14.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T20:08:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T20:09:15.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T20:10:15.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T20:11:15.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T20:12:16.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T20:13:16.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T20:14:16.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T20:15:17.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-22T20:16:17.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T20:17:17.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T20:18:17.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T20:19:18.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T20:20:18.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T20:21:18.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T20:22:18.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T20:23:19.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T20:24:19.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T20:25:19.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T20:26:19.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T20:27:20.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T20:28:20.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T20:29:20.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T20:30:20.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-22T20:31:20.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T20:32:21.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T20:33:21.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T20:34:21.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T20:35:21.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T20:36:22.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T20:37:22.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T20:38:22.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T20:39:22.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T20:40:22.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T20:41:23.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T20:42:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T20:43:23.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T20:44:23.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T20:45:24.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-22T20:46:24.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T20:47:24.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T20:48:24.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T20:49:25.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T20:50:25.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T20:51:25.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T20:52:25.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T20:53:26.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T20:54:26.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T20:55:26.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T20:56:26.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T20:57:26.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T20:58:27.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T20:59:27.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T21:00:27.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-22T21:01:27.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T21:02:28.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T21:03:28.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T21:04:28.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T21:05:28.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T21:06:29.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T21:07:29.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T21:08:29.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T21:09:29.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T21:10:30.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T21:11:30.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T21:12:30.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T21:13:30.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T21:14:31.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T21:15:31.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T21:16:31.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T21:17:31.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-22T21:18:31.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T21:19:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T21:20:32.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T21:21:32.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T21:22:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T21:23:33.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T21:24:33.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T21:25:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T21:26:33.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T21:27:34.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T21:28:34.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T21:29:34.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-22T21:30:34.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T21:31:35.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T21:32:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T21:33:35.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T21:34:35.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T21:35:36.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T21:36:36.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T21:37:36.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T21:38:36.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T21:39:37.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T21:40:37.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T21:41:37.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T21:42:37.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T21:43:37.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T21:44:38.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T21:45:38.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T21:46:38.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T21:47:38.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T21:48:38.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T21:49:39.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T21:50:39.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T21:51:39.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T21:52:39.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-22T21:53:40.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T21:54:40.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T21:55:40.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-22T21:56:40.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T21:57:41.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T21:58:41.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T21:59:41.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T22:00:41.000Z",
        "cpu_usage": 8.6
    },
    {
        "date": "2021-05-22T22:01:42.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T22:02:42.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T22:03:42.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-22T22:04:42.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T22:05:43.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T22:06:43.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T22:07:43.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T22:08:43.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T22:09:43.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T22:10:44.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T22:11:44.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-22T22:12:44.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T22:13:44.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T22:14:45.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T22:15:45.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T22:16:45.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T22:17:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T22:18:46.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T22:19:46.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T22:20:46.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T22:21:46.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T22:22:46.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T22:23:47.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T22:24:47.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T22:25:47.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T22:26:47.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T22:27:48.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T22:28:48.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T22:29:48.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T22:30:49.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-22T22:31:49.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T22:32:49.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T22:33:49.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T22:34:50.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T22:35:50.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T22:36:50.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T22:37:51.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T22:38:51.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T22:39:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T22:40:51.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T22:41:51.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T22:42:52.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T22:43:52.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T22:44:52.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T22:45:52.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T22:46:53.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T22:47:53.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T22:48:53.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T22:49:53.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T22:50:53.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T22:51:54.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-22T22:52:54.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T22:53:54.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T22:54:54.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T22:55:54.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T22:56:55.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-22T22:57:55.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T22:58:55.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T22:59:55.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T23:00:55.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T23:01:56.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T23:02:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T23:03:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T23:04:56.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T23:05:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T23:06:57.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T23:07:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T23:08:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T23:09:58.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T23:10:58.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T23:11:58.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T23:12:58.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T23:13:59.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T23:14:59.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T23:15:59.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T23:16:59.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T23:17:59.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-22T23:19:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T23:20:00.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T23:21:00.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-22T23:22:00.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-22T23:23:00.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-22T23:24:01.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T23:25:01.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T23:26:01.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T23:27:01.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-22T23:28:02.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T23:29:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T23:30:02.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-22T23:31:02.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T23:32:02.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-22T23:33:03.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T23:34:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T23:35:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T23:36:03.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T23:37:03.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-22T23:38:04.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T23:39:04.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-22T23:40:04.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T23:41:04.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T23:42:05.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T23:43:05.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T23:44:05.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T23:45:05.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T23:46:06.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-22T23:47:06.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T23:48:06.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T23:49:06.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-22T23:50:07.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-22T23:51:07.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-22T23:52:07.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-22T23:53:07.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T23:54:07.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T23:55:08.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-22T23:56:08.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-22T23:57:08.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-22T23:58:08.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-22T23:59:08.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T00:00:09.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T00:01:09.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T00:02:09.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T00:03:09.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T00:04:09.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T00:05:10.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T00:06:10.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T00:07:10.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T00:08:10.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T00:09:11.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T00:10:11.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T00:11:11.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T00:12:11.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T00:13:11.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T00:14:12.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T00:15:12.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T00:16:12.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T00:17:12.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T00:18:13.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T00:19:13.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T00:20:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T00:21:13.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T00:22:13.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T00:23:14.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T00:24:14.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T00:25:14.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T00:26:14.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T00:27:15.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T00:28:15.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T00:29:15.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T00:30:15.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T00:31:15.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T00:32:16.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T00:33:16.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T00:34:16.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T00:35:16.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T00:36:16.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T00:37:17.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T00:38:17.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T00:39:17.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T00:40:17.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T00:41:18.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T00:42:18.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T00:43:18.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T00:44:18.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T00:45:18.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T00:46:19.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T00:47:19.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T00:48:19.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T00:49:19.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T00:50:20.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T00:51:20.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T00:52:20.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T00:53:20.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T00:54:21.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T00:55:21.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T00:56:21.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T00:57:21.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T00:58:21.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T00:59:22.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T01:00:22.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T01:01:22.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T01:02:22.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T01:03:22.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T01:04:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T01:05:23.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T01:06:23.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T01:07:23.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T01:08:24.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T01:09:24.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T01:10:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T01:11:24.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T01:12:24.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T01:13:25.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T01:14:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T01:15:25.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T01:16:25.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T01:17:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T01:18:26.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T01:19:26.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T01:20:26.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T01:21:26.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T01:22:27.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T01:23:27.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T01:24:27.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T01:25:27.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T01:26:27.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T01:27:28.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T01:28:28.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T01:29:28.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T01:30:28.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T01:31:29.000Z",
        "cpu_usage": 8.5
    },
    {
        "date": "2021-05-23T01:32:29.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-23T01:33:29.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-23T01:34:29.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T01:35:29.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T01:36:30.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T01:37:30.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T01:38:30.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T01:39:30.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T01:40:30.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T01:41:31.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T01:42:31.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T01:43:31.000Z",
        "cpu_usage": 8
    },
    {
        "date": "2021-05-23T01:44:31.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T01:45:32.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T01:46:32.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T01:47:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T01:48:32.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T01:49:32.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T01:50:33.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T01:51:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T01:52:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T01:53:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T01:54:34.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T01:55:34.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T01:56:34.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T01:57:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T01:58:34.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T01:59:35.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T02:00:35.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T02:01:35.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T02:02:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T02:03:36.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-23T02:04:36.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T02:05:36.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T02:06:36.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T02:07:37.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T02:08:37.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T02:09:37.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T02:10:37.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T02:11:38.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T02:12:38.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T02:13:38.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T02:14:38.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T02:15:39.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T02:16:39.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T02:17:39.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T02:18:39.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T02:19:40.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T02:20:40.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T02:21:40.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T02:22:40.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T02:23:41.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T02:24:41.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T02:25:41.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T02:26:41.000Z",
        "cpu_usage": 4.5
    },
    {
        "date": "2021-05-23T02:27:42.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T02:28:42.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T02:29:42.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T02:30:42.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T02:31:43.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T02:32:43.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T02:33:43.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T02:34:43.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T02:35:44.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T02:36:44.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T02:37:44.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T02:38:44.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T02:39:44.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T02:40:45.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T02:41:45.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T02:42:45.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T02:43:45.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-23T02:44:46.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T02:45:46.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T02:46:46.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T02:47:46.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T02:48:47.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T02:49:47.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T02:50:47.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T02:51:47.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T02:52:48.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T02:53:48.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T02:54:48.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T02:55:48.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T02:56:49.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T02:57:49.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T02:58:49.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T02:59:49.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T03:00:49.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T03:01:50.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T03:02:50.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T03:03:50.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T03:04:50.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T03:05:51.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T03:06:51.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T03:07:51.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T03:08:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T03:09:52.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T03:10:52.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T03:11:52.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T03:12:52.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T03:13:53.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T03:14:53.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T03:15:53.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T03:16:53.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T03:17:54.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T03:18:54.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T03:19:54.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T03:20:54.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T03:21:55.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T03:22:55.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T03:23:55.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T03:24:55.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T03:25:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T03:26:56.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T03:27:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T03:28:56.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T03:29:56.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T03:30:57.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T03:31:57.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T03:32:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T03:33:57.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T03:34:58.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T03:35:58.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T03:36:58.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T03:37:58.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T03:38:59.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T03:39:59.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T03:40:59.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T03:41:59.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T03:43:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T03:44:00.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T03:45:00.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T03:46:00.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T03:47:01.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T03:48:01.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T03:49:01.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T03:50:01.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T03:51:02.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T03:52:02.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T03:53:02.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T03:54:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T03:55:03.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T03:56:03.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T03:57:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T03:58:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T03:59:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T04:00:04.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T04:01:04.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T04:02:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T04:03:04.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T04:04:05.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T04:05:05.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T04:06:05.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T04:07:05.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T04:08:06.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T04:09:06.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T04:10:06.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T04:11:06.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T04:12:06.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T04:13:07.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T04:14:07.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T04:15:07.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T04:16:07.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T04:17:08.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T04:18:08.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T04:19:08.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-23T04:20:08.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T04:21:09.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T04:22:09.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T04:23:09.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-23T04:24:09.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T04:25:10.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T04:26:10.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-23T04:27:10.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T04:28:10.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T04:29:11.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T04:30:11.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T04:31:11.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T04:32:11.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T04:33:12.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T04:34:12.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T04:35:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T04:36:12.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T04:37:13.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T04:38:13.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T04:39:13.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T04:40:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T04:41:13.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T04:42:14.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T04:43:14.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T04:44:14.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T04:45:14.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T04:46:15.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T04:47:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T04:48:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T04:49:15.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T04:50:16.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T04:51:16.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T04:52:16.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T04:53:16.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T04:54:17.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T04:55:17.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T04:56:17.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T04:57:17.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T04:58:18.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-23T04:59:18.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T05:00:18.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T05:01:18.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T05:02:18.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T05:03:19.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T05:04:19.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T05:05:19.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T05:06:19.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T05:07:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T05:08:20.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T05:09:20.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T05:10:21.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T05:11:21.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T05:12:21.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T05:13:21.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T05:14:21.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T05:15:22.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T05:16:22.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T05:17:22.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T05:18:22.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T05:19:23.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T05:20:23.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T05:21:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T05:22:23.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T05:23:24.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T05:24:24.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T05:25:24.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T05:26:24.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T05:27:25.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T05:28:25.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T05:29:25.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T05:30:25.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T05:31:26.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-23T05:32:26.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T05:33:26.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T05:34:26.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T05:35:27.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T05:36:27.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T05:37:27.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T05:38:27.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T05:39:28.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T05:40:28.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T05:41:28.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T05:42:28.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T05:43:29.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T05:44:29.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T05:45:29.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T05:46:29.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T05:47:29.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T05:48:30.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T05:49:30.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T05:50:30.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T05:51:30.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T05:52:31.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T05:53:31.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T05:54:31.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T05:55:31.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T05:56:31.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T05:57:32.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T05:58:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T05:59:32.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T06:00:32.000Z",
        "cpu_usage": 8.5
    },
    {
        "date": "2021-05-23T06:01:33.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T06:02:33.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T06:03:33.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T06:04:33.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T06:05:34.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T06:06:34.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T06:07:34.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T06:08:34.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T06:09:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T06:10:35.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T06:11:35.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-23T06:12:35.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T06:13:36.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T06:14:36.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T06:15:36.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T06:16:36.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T06:17:37.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T06:18:37.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T06:19:37.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T06:20:37.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T06:21:37.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T06:22:38.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T06:23:38.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T06:24:38.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T06:25:38.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T06:26:38.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T06:27:39.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T06:28:39.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T06:29:39.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T06:30:39.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T06:31:40.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T06:32:40.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T06:33:40.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T06:34:40.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T06:35:41.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T06:36:41.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T06:37:41.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T06:38:41.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T06:39:42.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T06:40:42.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T06:41:42.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T06:42:42.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T06:43:43.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T06:44:43.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T06:45:43.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T06:46:43.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T06:47:44.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T06:48:44.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T06:49:44.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T06:50:44.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T06:51:44.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T06:52:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T06:53:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T06:54:45.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T06:55:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T06:56:45.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T06:57:46.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T06:58:46.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T06:59:46.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T07:00:46.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T07:01:47.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-23T07:02:47.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T07:03:47.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T07:04:47.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-23T07:05:47.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-23T07:06:48.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T07:07:48.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T07:08:48.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T07:09:48.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T07:10:49.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T07:11:49.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T07:12:49.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T07:13:49.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T07:14:50.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T07:15:50.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T07:16:50.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-23T07:17:50.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T07:18:51.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T07:19:51.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T07:20:51.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T07:21:51.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T07:22:52.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T07:23:52.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T07:24:52.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T07:25:52.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T07:26:52.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T07:27:53.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T07:28:53.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T07:29:53.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T07:30:53.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T07:31:54.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T07:32:54.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T07:33:54.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T07:34:54.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T07:35:54.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T07:36:55.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T07:37:55.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T07:38:55.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T07:39:55.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T07:40:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T07:41:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T07:42:56.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T07:43:56.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T07:44:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T07:45:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T07:46:57.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T07:47:57.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T07:48:58.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T07:49:58.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T07:50:58.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T07:51:58.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T07:52:58.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T07:53:59.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T07:54:59.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T07:55:59.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T07:56:59.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T07:58:00.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T07:59:00.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T08:00:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T08:01:00.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T08:02:00.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T08:03:01.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T08:04:01.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T08:05:01.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T08:06:01.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T08:07:02.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T08:08:02.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T08:09:02.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T08:10:02.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T08:11:02.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T08:12:03.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T08:13:03.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T08:14:03.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T08:15:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T08:16:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T08:17:04.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T08:18:04.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T08:19:04.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T08:20:05.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T08:21:05.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T08:22:05.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T08:23:05.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T08:24:06.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-23T08:25:06.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T08:26:06.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-23T08:27:06.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T08:28:07.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-23T08:29:07.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T08:30:07.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T08:31:07.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T08:32:07.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T08:33:08.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T08:34:08.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T08:35:08.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T08:36:08.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T08:37:09.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T08:38:09.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T08:39:09.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T08:40:09.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T08:41:09.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T08:42:10.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T08:43:10.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T08:44:10.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T08:45:10.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T08:46:11.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T08:47:11.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T08:48:11.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-23T08:49:11.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T08:50:11.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T08:51:12.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T08:52:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T08:53:12.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T08:54:12.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T08:55:13.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T08:56:13.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T08:57:13.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T08:58:13.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T08:59:14.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T09:00:14.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T09:01:14.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T09:02:14.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T09:03:15.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T09:04:15.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T09:05:15.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T09:06:15.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T09:07:15.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T09:08:16.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T09:09:16.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T09:10:16.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T09:11:16.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T09:12:17.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T09:13:17.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T09:14:17.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T09:15:17.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T09:16:17.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T09:17:18.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T09:18:18.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T09:19:18.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T09:20:18.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T09:21:19.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T09:22:19.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T09:23:19.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T09:24:19.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T09:25:19.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T09:26:20.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T09:27:20.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T09:28:20.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T09:29:20.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T09:30:21.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T09:31:21.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-23T09:32:21.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T09:33:21.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T09:34:22.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T09:35:22.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T09:36:22.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T09:37:22.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T09:38:23.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T09:39:23.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T09:40:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T09:41:23.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T09:42:23.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T09:43:24.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T09:44:24.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T09:45:24.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T09:46:24.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T09:47:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T09:48:25.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T09:49:25.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T09:50:25.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T09:51:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T09:52:26.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T09:53:26.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T09:54:26.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T09:55:26.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T09:56:27.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T09:57:27.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T09:58:27.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T09:59:27.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T10:00:28.000Z",
        "cpu_usage": 7.9
    },
    {
        "date": "2021-05-23T10:01:28.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T10:02:28.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T10:03:28.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T10:04:28.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T10:05:29.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T10:06:29.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T10:07:29.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T10:08:29.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T10:09:30.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T10:10:30.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T10:11:30.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T10:12:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T10:13:31.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T10:14:31.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T10:15:31.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T10:16:31.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T10:17:32.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T10:18:32.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T10:19:32.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T10:20:32.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T10:21:32.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T10:22:33.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T10:23:33.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T10:24:33.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T10:25:33.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T10:26:34.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T10:27:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T10:28:34.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T10:29:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T10:30:35.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T10:31:35.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-23T10:32:35.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T10:33:35.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T10:34:36.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T10:35:36.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T10:36:36.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T10:37:36.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T10:38:37.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T10:39:37.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T10:40:37.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T10:41:38.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T10:42:38.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T10:43:38.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T10:44:38.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T10:45:39.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T10:46:39.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T10:47:39.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T10:48:39.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T10:49:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T10:50:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T10:51:40.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T10:52:40.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T10:53:41.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T10:54:41.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T10:55:41.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T10:56:41.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T10:57:42.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T10:58:42.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T10:59:42.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T11:00:42.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T11:01:43.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T11:02:43.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T11:03:43.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T11:04:43.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T11:05:44.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T11:06:44.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T11:07:44.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T11:08:44.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T11:09:45.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T11:10:45.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T11:11:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T11:12:45.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T11:13:46.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T11:14:46.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T11:15:46.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T11:16:46.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T11:17:47.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T11:18:47.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-23T11:19:47.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T11:20:47.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T11:21:48.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T11:22:48.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T11:23:48.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T11:24:48.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T11:25:49.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T11:26:49.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T11:27:49.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T11:28:49.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T11:29:50.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T11:30:50.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T11:31:50.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T11:32:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T11:33:51.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T11:34:51.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T11:35:51.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T11:36:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T11:37:52.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T11:38:52.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T11:39:52.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T11:40:53.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T11:41:53.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T11:42:53.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T11:43:53.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T11:44:54.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T11:45:54.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T11:46:54.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T11:47:54.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T11:48:54.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T11:49:55.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T11:50:55.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T11:51:55.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T11:52:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T11:53:56.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T11:54:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T11:55:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T11:56:57.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T11:57:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T11:58:57.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T11:59:57.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T12:00:58.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T12:01:58.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T12:02:58.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T12:03:58.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T12:04:59.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T12:05:59.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T12:06:59.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T12:07:59.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T12:09:00.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T12:10:00.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T12:11:00.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T12:12:00.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T12:13:01.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T12:14:01.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T12:15:01.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T12:16:01.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T12:17:02.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T12:18:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T12:19:02.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T12:20:02.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T12:21:03.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T12:22:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T12:23:03.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T12:24:03.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T12:25:04.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T12:26:04.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T12:27:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T12:28:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T12:29:05.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T12:30:05.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T12:31:05.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T12:32:05.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T12:33:06.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T12:34:06.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T12:35:06.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T12:36:07.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T12:37:07.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T12:38:07.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T12:39:07.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T12:40:08.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T12:41:08.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T12:42:08.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T12:43:08.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T12:44:09.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T12:45:09.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T12:46:09.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T12:47:09.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T12:48:10.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T12:49:10.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T12:50:10.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T12:51:10.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T12:52:11.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T12:53:11.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T12:54:11.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T12:55:11.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T12:56:11.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T12:57:12.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T12:58:12.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T12:59:12.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T13:00:12.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T13:01:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T13:02:13.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-23T13:03:13.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T13:04:13.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T13:05:14.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T13:06:14.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T13:07:14.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-23T13:08:14.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T13:09:15.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T13:10:15.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T13:11:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T13:12:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T13:13:16.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T13:14:16.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T13:15:16.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T13:16:17.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-23T13:17:17.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T13:18:17.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T13:19:17.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T13:20:18.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T13:21:18.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T13:22:18.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T13:23:18.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T13:24:18.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T13:25:19.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T13:26:19.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T13:27:19.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T13:28:19.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T13:29:20.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T13:30:20.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T13:31:20.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T13:32:20.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-23T13:33:21.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T13:34:21.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T13:35:21.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T13:36:21.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T13:37:22.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T13:38:22.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T13:39:22.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-23T13:40:22.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T13:41:23.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T13:42:23.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T13:43:23.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T13:44:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T13:45:24.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T13:46:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T13:47:24.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T13:48:25.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T13:49:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T13:50:25.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T13:51:25.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T13:52:26.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T13:53:26.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T13:54:26.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T13:55:26.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T13:56:27.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T13:57:27.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T13:58:27.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T13:59:27.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T14:00:27.000Z",
        "cpu_usage": 8.6
    },
    {
        "date": "2021-05-23T14:01:28.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T14:02:28.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T14:03:28.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T14:04:28.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T14:05:29.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T14:06:29.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T14:07:29.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T14:08:29.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T14:09:30.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T14:10:30.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T14:11:30.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T14:12:30.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T14:13:31.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T14:14:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:15:31.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T14:16:31.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T14:17:32.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-23T14:18:32.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T14:19:32.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T14:20:32.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T14:21:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T14:22:33.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T14:23:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T14:24:34.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:25:34.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T14:26:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T14:27:34.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:28:34.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T14:29:35.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T14:30:35.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T14:31:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T14:32:35.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T14:33:36.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:34:36.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:35:36.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T14:36:36.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T14:37:36.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:38:37.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T14:39:37.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T14:40:37.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T14:41:37.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T14:42:38.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T14:43:38.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:44:38.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T14:45:38.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T14:46:39.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T14:47:39.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-23T14:48:39.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:49:39.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:50:40.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T14:51:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:52:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:53:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:54:41.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T14:55:41.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T14:56:41.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T14:57:41.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T14:58:42.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T14:59:42.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T15:00:42.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T15:01:42.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T15:02:43.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T15:03:43.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T15:04:43.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T15:05:43.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T15:06:43.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T15:07:44.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T15:08:44.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T15:09:44.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T15:10:44.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T15:11:45.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T15:12:45.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T15:13:45.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T15:14:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T15:15:46.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T15:16:46.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-23T15:17:46.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T15:18:46.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T15:19:47.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T15:20:47.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T15:21:47.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T15:22:47.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T15:23:48.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T15:24:48.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T15:25:48.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T15:26:48.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T15:27:49.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T15:28:49.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T15:29:49.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T15:30:49.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T15:31:50.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-23T15:32:50.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T15:33:50.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T15:34:50.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T15:35:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T15:36:51.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T15:37:51.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T15:38:51.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T15:39:52.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T15:40:52.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T15:41:52.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T15:42:52.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T15:43:53.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T15:44:53.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T15:45:53.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T15:46:53.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T15:47:53.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T15:48:54.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T15:49:54.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T15:50:54.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T15:51:55.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T15:52:55.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T15:53:55.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T15:54:55.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T15:55:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T15:56:56.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T15:57:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T15:58:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T15:59:57.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T16:00:57.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T16:01:57.000Z",
        "cpu_usage": 8.2
    },
    {
        "date": "2021-05-23T16:02:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T16:03:58.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T16:04:58.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T16:05:58.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T16:06:58.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T16:07:58.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T16:08:59.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T16:09:59.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T16:10:59.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T16:11:59.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T16:13:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T16:14:00.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T16:15:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T16:16:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T16:17:01.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T16:18:01.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T16:19:01.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T16:20:01.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T16:21:02.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T16:22:02.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T16:23:02.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T16:24:02.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T16:25:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T16:26:03.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T16:27:03.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T16:28:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T16:29:04.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T16:30:04.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T16:31:04.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T16:32:04.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T16:33:05.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T16:34:05.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T16:35:05.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T16:36:05.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T16:37:05.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T16:38:06.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T16:39:06.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T16:40:06.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T16:41:06.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T16:42:07.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T16:43:07.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T16:44:07.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T16:45:07.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T16:46:08.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T16:47:08.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-23T16:48:08.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T16:49:08.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T16:50:09.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T16:51:09.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T16:52:09.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T16:53:09.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T16:54:10.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T16:55:10.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T16:56:10.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T16:57:10.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T16:58:11.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T16:59:11.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T17:00:11.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T17:01:11.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T17:02:12.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-23T17:03:12.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T17:04:12.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T17:05:12.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T17:06:13.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T17:07:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T17:08:13.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T17:09:13.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T17:10:14.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T17:11:14.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T17:12:14.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T17:13:14.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T17:14:14.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T17:15:15.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T17:16:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T17:17:15.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T17:18:15.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T17:19:16.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T17:20:16.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T17:21:16.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T17:22:16.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T17:23:17.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T17:24:17.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T17:25:17.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T17:26:17.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T17:27:18.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T17:28:18.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T17:29:18.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T17:30:18.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T17:31:19.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T17:32:19.000Z",
        "cpu_usage": 8.5
    },
    {
        "date": "2021-05-23T17:33:19.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T17:34:19.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T17:35:19.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T17:36:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T17:37:20.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T17:38:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T17:39:20.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T17:40:21.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T17:41:21.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T17:42:21.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T17:43:21.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T17:44:22.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T17:45:22.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T17:46:22.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T17:47:22.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-23T17:48:23.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T17:49:23.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T17:50:23.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T17:51:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T17:52:24.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T17:53:24.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T17:54:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T17:55:24.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T17:56:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T17:57:25.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T17:58:25.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T17:59:25.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T18:00:25.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-23T18:01:26.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T18:02:26.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-23T18:03:26.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T18:04:26.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T18:05:27.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T18:06:27.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T18:07:27.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T18:08:27.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T18:09:27.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T18:10:28.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T18:11:28.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T18:12:28.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T18:13:28.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T18:14:29.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T18:15:29.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T18:16:29.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T18:17:29.000Z",
        "cpu_usage": 8.5
    },
    {
        "date": "2021-05-23T18:18:30.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T18:19:30.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T18:20:30.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T18:21:30.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T18:22:30.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T18:23:31.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T18:24:31.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T18:25:31.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T18:26:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T18:27:32.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T18:28:32.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T18:29:32.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T18:30:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T18:31:33.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T18:32:33.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T18:33:33.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-23T18:34:34.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T18:35:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T18:36:34.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T18:37:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T18:38:35.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-23T18:39:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T18:40:35.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T18:41:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T18:42:36.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T18:43:36.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T18:44:36.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T18:45:36.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T18:46:37.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T18:47:37.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-23T18:48:37.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T18:49:37.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T18:50:38.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T18:51:38.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T18:52:38.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T18:53:39.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T18:54:39.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T18:55:39.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T18:56:39.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T18:57:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T18:58:40.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T18:59:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T19:00:40.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T19:01:41.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T19:02:41.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T19:03:41.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T19:04:41.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T19:05:42.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T19:06:42.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T19:07:42.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T19:08:42.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T19:09:43.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T19:10:43.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T19:11:43.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T19:12:43.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T19:13:44.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T19:14:44.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T19:15:44.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T19:16:44.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T19:17:45.000Z",
        "cpu_usage": 8.3
    },
    {
        "date": "2021-05-23T19:18:45.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-23T19:19:45.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T19:20:45.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T19:21:46.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T19:22:46.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T19:23:46.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T19:24:46.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T19:25:47.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T19:26:47.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T19:27:47.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T19:28:47.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T19:29:48.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T19:30:48.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T19:31:48.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T19:32:49.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T19:33:49.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T19:34:49.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T19:35:49.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T19:36:50.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T19:37:50.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T19:38:50.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T19:39:50.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T19:40:51.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-23T19:41:51.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T19:42:51.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T19:43:51.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T19:44:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T19:45:52.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T19:46:52.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T19:47:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T19:48:53.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T19:49:53.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T19:50:53.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T19:51:53.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T19:52:54.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T19:53:54.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T19:54:54.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T19:55:54.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T19:56:55.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T19:57:55.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T19:58:55.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T19:59:55.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T20:00:56.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T20:01:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T20:02:56.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T20:03:56.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T20:04:57.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T20:05:57.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T20:06:57.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T20:07:57.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T20:08:58.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T20:09:58.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T20:10:58.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T20:11:59.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T20:12:59.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T20:13:59.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T20:14:59.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T20:16:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T20:17:00.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T20:18:00.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T20:19:00.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-23T20:20:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T20:21:01.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T20:22:01.000Z",
        "cpu_usage": 4.8
    },
    {
        "date": "2021-05-23T20:23:01.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T20:24:01.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T20:25:02.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T20:26:02.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T20:27:02.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T20:28:02.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T20:29:03.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T20:30:03.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-23T20:31:03.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T20:32:04.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T20:33:04.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T20:34:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T20:35:04.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T20:36:05.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T20:37:05.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T20:38:05.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T20:39:05.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T20:40:06.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T20:41:06.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T20:42:06.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-23T20:43:06.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T20:44:07.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T20:45:07.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T20:46:07.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T20:47:07.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T20:48:08.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T20:49:08.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T20:50:08.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T20:51:08.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T20:52:09.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T20:53:09.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T20:54:09.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T20:55:09.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T20:56:10.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T20:57:10.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T20:58:10.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T20:59:10.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T21:00:11.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T21:01:11.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T21:02:11.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-23T21:03:11.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T21:04:12.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T21:05:12.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T21:06:12.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T21:07:12.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-23T21:08:13.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T21:09:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T21:10:13.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T21:11:13.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T21:12:14.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T21:13:14.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T21:14:14.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T21:15:15.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T21:16:15.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T21:17:15.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T21:18:15.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T21:19:15.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-23T21:20:16.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T21:21:16.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T21:22:16.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T21:23:16.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T21:24:17.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T21:25:17.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T21:26:17.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T21:27:17.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-23T21:28:18.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-23T21:29:18.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T21:30:18.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T21:31:18.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T21:32:19.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T21:33:19.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T21:34:19.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T21:35:19.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T21:36:20.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-23T21:37:20.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T21:38:20.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T21:39:20.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T21:40:21.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T21:41:21.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T21:42:21.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T21:43:21.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T21:44:22.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T21:45:22.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-23T21:46:22.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T21:47:22.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T21:48:23.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T21:49:23.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T21:50:23.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T21:51:23.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T21:52:24.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T21:53:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T21:54:24.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T21:55:24.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T21:56:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T21:57:25.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T21:58:25.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T21:59:25.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T22:00:25.000Z",
        "cpu_usage": 7.9
    },
    {
        "date": "2021-05-23T22:01:26.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T22:02:26.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T22:03:26.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T22:04:26.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T22:05:27.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T22:06:27.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T22:07:27.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T22:08:27.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T22:09:28.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T22:10:28.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T22:11:28.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T22:12:28.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T22:13:29.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T22:14:29.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T22:15:29.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T22:16:30.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T22:17:30.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T22:18:30.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T22:19:30.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T22:20:30.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T22:21:31.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T22:22:31.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T22:23:31.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T22:24:31.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T22:25:32.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T22:26:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T22:27:32.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T22:28:32.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T22:29:33.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T22:30:33.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T22:31:33.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T22:32:33.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T22:33:34.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-23T22:34:34.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T22:35:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T22:36:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T22:37:34.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T22:38:35.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T22:39:35.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T22:40:35.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T22:41:36.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T22:42:36.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T22:43:36.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T22:44:36.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T22:45:37.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T22:46:37.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T22:47:37.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T22:48:37.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T22:49:38.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T22:50:38.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T22:51:38.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T22:52:38.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T22:53:39.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T22:54:39.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T22:55:39.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T22:56:39.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T22:57:40.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T22:58:40.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T22:59:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T23:00:40.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-23T23:01:41.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T23:02:41.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T23:03:41.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T23:04:41.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T23:05:42.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T23:06:42.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T23:07:42.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T23:08:42.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T23:09:42.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T23:10:43.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-23T23:11:43.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-23T23:12:43.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T23:13:43.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T23:14:44.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T23:15:44.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T23:16:44.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T23:17:45.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-23T23:18:45.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T23:19:45.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T23:20:45.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-23T23:21:46.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T23:22:46.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T23:23:46.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T23:24:46.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T23:25:47.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T23:26:47.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T23:27:47.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T23:28:47.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T23:29:47.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T23:30:48.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-23T23:31:48.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T23:32:48.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-23T23:33:48.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-23T23:34:49.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T23:35:49.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T23:36:49.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T23:37:49.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T23:38:50.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T23:39:50.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T23:40:50.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-23T23:41:50.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T23:42:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T23:43:51.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-23T23:44:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T23:45:51.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T23:46:52.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T23:47:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-23T23:48:52.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T23:49:52.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-23T23:50:53.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-23T23:51:53.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T23:52:53.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T23:53:53.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-23T23:54:54.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-23T23:55:54.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-23T23:56:54.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T23:57:54.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-23T23:58:55.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-23T23:59:55.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T00:00:55.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T00:01:55.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T00:02:56.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T00:03:56.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T00:04:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T00:05:56.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T00:06:56.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T00:07:57.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T00:08:57.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T00:09:57.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T00:10:57.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T00:11:58.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T00:12:58.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T00:13:58.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T00:14:58.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T00:15:59.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T00:16:59.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T00:17:59.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T00:18:59.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T00:20:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T00:21:00.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T00:22:00.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T00:23:00.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T00:24:01.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T00:25:01.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T00:26:01.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T00:27:01.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T00:28:02.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T00:29:02.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T00:30:02.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T00:31:02.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T00:32:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T00:33:03.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T00:34:03.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T00:35:03.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T00:36:03.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T00:37:04.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T00:38:04.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T00:39:04.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T00:40:04.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T00:41:05.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T00:42:05.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T00:43:05.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T00:44:05.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T00:45:06.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T00:46:06.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T00:47:06.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T00:48:06.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T00:49:07.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T00:50:07.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T00:51:07.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T00:52:07.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T00:53:08.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T00:54:08.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T00:55:08.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T00:56:08.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T00:57:09.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T00:58:09.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T00:59:09.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T01:00:09.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T01:01:10.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T01:02:10.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T01:03:10.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T01:04:10.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T01:05:11.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T01:06:11.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T01:07:11.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T01:08:11.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T01:09:11.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T01:10:12.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T01:11:12.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T01:12:12.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T01:13:12.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T01:14:13.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T01:15:13.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T01:16:13.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T01:17:13.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T01:18:14.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T01:19:14.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T01:20:14.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T01:21:14.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T01:22:14.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T01:23:15.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T01:24:15.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T01:25:15.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T01:26:15.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T01:27:16.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T01:28:16.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T01:29:16.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T01:30:16.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T01:31:17.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T01:32:17.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T01:33:17.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T01:34:17.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T01:35:18.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T01:36:18.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T01:37:18.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T01:38:18.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T01:39:19.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T01:40:19.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T01:41:19.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T01:42:19.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T01:43:19.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T01:44:20.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T01:45:20.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T01:46:20.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T01:47:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T01:48:21.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T01:49:21.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T01:50:21.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T01:51:21.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T01:52:22.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T01:53:22.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T01:54:22.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T01:55:22.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T01:56:22.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T01:57:23.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T01:58:23.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T01:59:23.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T02:00:23.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-24T02:01:24.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T02:02:24.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T02:03:24.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T02:04:24.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T02:05:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T02:06:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T02:07:25.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T02:08:25.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T02:09:26.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T02:10:26.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T02:11:26.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T02:12:26.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T02:13:27.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T02:14:27.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T02:15:27.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T02:16:27.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T02:17:28.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-24T02:18:28.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T02:19:28.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T02:20:28.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T02:21:29.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T02:22:29.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T02:23:29.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T02:24:29.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T02:25:30.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T02:26:30.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T02:27:30.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T02:28:30.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T02:29:31.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T02:30:31.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T02:31:31.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T02:32:31.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T02:33:32.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T02:34:32.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T02:35:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T02:36:32.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T02:37:33.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T02:38:33.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T02:39:33.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T02:40:33.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T02:41:34.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T02:42:34.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T02:43:34.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T02:44:35.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T02:45:35.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T02:46:35.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T02:47:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T02:48:36.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T02:49:36.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T02:50:36.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T02:51:36.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T02:52:37.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T02:53:37.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T02:54:37.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T02:55:37.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T02:56:38.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T02:57:38.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T02:58:38.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T02:59:38.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T03:00:39.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T03:01:39.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T03:02:39.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T03:03:39.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T03:04:40.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T03:05:40.000Z",
        "cpu_usage": 4.9
    },
    {
        "date": "2021-05-24T03:06:40.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T03:07:40.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T03:08:41.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T03:09:41.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T03:10:41.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T03:11:42.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T03:12:42.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T03:13:42.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T03:14:42.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T03:15:43.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T03:16:43.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T03:17:43.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T03:18:43.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T03:19:44.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T03:20:44.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T03:21:44.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T03:22:44.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T03:23:45.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T03:24:45.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T03:25:45.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T03:26:45.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T03:27:46.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T03:28:46.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T03:29:46.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T03:30:46.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T03:31:47.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T03:32:47.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T03:33:47.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T03:34:47.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T03:35:48.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T03:36:48.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T03:37:48.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T03:38:48.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T03:39:49.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T03:40:49.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T03:41:49.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T03:42:49.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T03:43:50.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T03:44:50.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T03:45:50.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T03:46:50.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T03:47:51.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T03:48:51.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T03:49:51.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T03:50:51.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T03:51:52.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T03:52:52.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T03:53:52.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T03:54:53.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T03:55:53.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T03:56:53.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T03:57:53.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T03:58:54.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T03:59:54.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T04:00:54.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T04:01:54.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T04:02:55.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T04:03:55.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T04:04:55.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T04:05:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T04:06:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T04:07:56.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T04:08:56.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T04:09:57.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T04:10:57.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T04:11:57.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T04:12:57.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T04:13:58.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T04:14:58.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T04:15:58.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T04:16:58.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T04:17:59.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T04:18:59.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-24T04:19:59.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T04:20:59.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T04:22:00.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T04:23:00.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T04:24:00.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T04:25:00.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T04:26:01.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T04:27:01.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T04:28:01.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T04:29:01.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T04:30:02.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T04:31:02.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T04:32:02.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T04:33:03.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T04:34:03.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-24T04:35:03.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T04:36:03.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T04:37:04.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T04:38:04.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T04:39:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T04:40:04.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T04:41:05.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T04:42:05.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T04:43:05.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T04:44:05.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T04:45:06.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T04:46:06.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T04:47:06.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T04:48:06.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T04:49:06.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T04:50:07.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T04:51:07.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T04:52:07.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T04:53:08.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T04:54:08.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T04:55:08.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T04:56:08.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T04:57:09.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T04:58:09.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T04:59:09.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T05:00:09.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T05:01:10.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T05:02:10.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T05:03:10.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T05:04:10.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-24T05:05:11.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T05:06:11.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T05:07:11.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T05:08:11.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T05:09:12.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T05:10:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T05:11:12.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T05:12:12.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T05:13:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T05:14:13.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T05:15:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T05:16:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T05:17:14.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T05:18:14.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T05:19:14.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-24T05:20:14.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T05:21:14.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T05:22:15.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T05:23:15.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T05:24:15.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T05:25:15.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T05:26:16.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T05:27:16.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T05:28:16.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T05:29:16.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T05:30:17.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T05:31:17.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T05:32:17.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T05:33:17.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T05:34:18.000Z",
        "cpu_usage": 8
    },
    {
        "date": "2021-05-24T05:35:18.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T05:36:18.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T05:37:18.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T05:38:19.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T05:39:19.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T05:40:19.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T05:41:19.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T05:42:20.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T05:43:20.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T05:44:20.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T05:45:20.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T05:46:21.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T05:47:21.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T05:48:21.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T05:49:21.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-24T05:50:22.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T05:51:22.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T05:52:22.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T05:53:22.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T05:54:22.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T05:55:23.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T05:56:23.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T05:57:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T05:58:23.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T05:59:24.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T06:00:24.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-24T06:01:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T06:02:24.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T06:03:25.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T06:04:25.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-24T06:05:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T06:06:25.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T06:07:26.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T06:08:26.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T06:09:26.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T06:10:26.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T06:11:27.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T06:12:27.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T06:13:27.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T06:14:27.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T06:15:28.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T06:16:28.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T06:17:28.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T06:18:28.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T06:19:29.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T06:20:29.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T06:21:29.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T06:22:29.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T06:23:30.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T06:24:30.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T06:25:30.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T06:26:30.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T06:27:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T06:28:31.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T06:29:31.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T06:30:31.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T06:31:31.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T06:32:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T06:33:32.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T06:34:32.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T06:35:32.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T06:36:32.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T06:37:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T06:38:33.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T06:39:33.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T06:40:34.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T06:41:34.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T06:42:34.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T06:43:34.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T06:44:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T06:45:35.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-24T06:46:35.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T06:47:35.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T06:48:36.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T06:49:36.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T06:50:36.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T06:51:36.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T06:52:36.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T06:53:37.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T06:54:37.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T06:55:37.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T06:56:37.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T06:57:38.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T06:58:38.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T06:59:38.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T07:00:38.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T07:01:38.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T07:02:39.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T07:03:39.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T07:04:39.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-24T07:05:39.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T07:06:40.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T07:07:40.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T07:08:40.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T07:09:40.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T07:10:41.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T07:11:41.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T07:12:41.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T07:13:41.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T07:14:42.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T07:15:42.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T07:16:42.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T07:17:42.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T07:18:43.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T07:19:43.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T07:20:43.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T07:21:43.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T07:22:43.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T07:23:44.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T07:24:44.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T07:25:44.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T07:26:44.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T07:27:45.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T07:28:45.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T07:29:45.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T07:30:45.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T07:31:46.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T07:32:46.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T07:33:46.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-24T07:34:46.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T07:35:46.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T07:36:47.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T07:37:47.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T07:38:47.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T07:39:47.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T07:40:48.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T07:41:48.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T07:42:48.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T07:43:48.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T07:44:49.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T07:45:49.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-24T07:46:49.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T07:47:49.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T07:48:50.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T07:49:50.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T07:50:50.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T07:51:50.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T07:52:51.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T07:53:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T07:54:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T07:55:51.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T07:56:52.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T07:57:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T07:58:52.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T07:59:52.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T08:00:52.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T08:01:53.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T08:02:53.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T08:03:53.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T08:04:53.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T08:05:54.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T08:06:54.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T08:07:54.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T08:08:54.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T08:09:54.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T08:10:55.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T08:11:55.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T08:12:55.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T08:13:55.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T08:14:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T08:15:56.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T08:16:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T08:17:56.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T08:18:57.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-24T08:19:57.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T08:20:57.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T08:21:57.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T08:22:58.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T08:23:58.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T08:24:58.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T08:25:58.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T08:26:59.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T08:27:59.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T08:28:59.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T08:29:59.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T08:30:59.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T08:32:00.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T08:33:00.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T08:34:00.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T08:35:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T08:36:01.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T08:37:01.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T08:38:01.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T08:39:01.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T08:40:01.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T08:41:02.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T08:42:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T08:43:02.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T08:44:02.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T08:45:03.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T08:46:03.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T08:47:03.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T08:48:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T08:49:04.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T08:50:04.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T08:51:04.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T08:52:04.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T08:53:05.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T08:54:05.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T08:55:05.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T08:56:05.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T08:57:05.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T08:58:06.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T08:59:06.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T09:00:06.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T09:01:06.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T09:02:07.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T09:03:07.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T09:04:07.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-24T09:05:07.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T09:06:08.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-24T09:07:08.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T09:08:08.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T09:09:08.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T09:10:08.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T09:11:09.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T09:12:09.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T09:13:09.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T09:14:09.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T09:15:10.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T09:16:10.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T09:17:10.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T09:18:10.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T09:19:11.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-24T09:20:11.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T09:21:11.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T09:22:11.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T09:23:12.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T09:24:12.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T09:25:12.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T09:26:12.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-24T09:27:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T09:28:13.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T09:29:13.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T09:30:13.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T09:31:13.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-24T09:32:14.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T09:33:14.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T09:34:14.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T09:35:14.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T09:36:15.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T09:37:15.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T09:38:15.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T09:39:15.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T09:40:15.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T09:41:16.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T09:42:16.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T09:43:16.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T09:44:16.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T09:45:17.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T09:46:17.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T09:47:17.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T09:48:17.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T09:49:17.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T09:50:18.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T09:51:18.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T09:52:18.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T09:53:18.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T09:54:19.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T09:55:19.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T09:56:19.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T09:57:19.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T09:58:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T09:59:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T10:00:20.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-24T10:01:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T10:02:21.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T10:03:21.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T10:04:21.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T10:05:21.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T10:06:22.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T10:07:22.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T10:08:22.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T10:09:22.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T10:10:22.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T10:11:23.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T10:12:23.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T10:13:23.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T10:14:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T10:15:24.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T10:16:24.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T10:17:24.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-24T10:18:24.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T10:19:25.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T10:20:25.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T10:21:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T10:22:25.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T10:23:26.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T10:24:26.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T10:25:26.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T10:26:26.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T10:27:26.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T10:28:27.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T10:29:27.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T10:30:27.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T10:31:27.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T10:32:28.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T10:33:28.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T10:34:28.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T10:35:28.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T10:36:29.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T10:37:29.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T10:38:29.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T10:39:29.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T10:40:29.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T10:41:30.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T10:42:30.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T10:43:30.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T10:44:30.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T10:45:31.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T10:46:31.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T10:47:31.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T10:48:31.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T10:49:32.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T10:50:32.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T10:51:32.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T10:52:32.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T10:53:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T10:54:33.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T10:55:33.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T10:56:33.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T10:57:34.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T10:58:34.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T10:59:34.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T11:00:34.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T11:01:35.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T11:02:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T11:03:35.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T11:04:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T11:05:36.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T11:06:36.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T11:07:36.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T11:08:36.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T11:09:37.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T11:10:37.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T11:11:37.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T11:12:37.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T11:13:38.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T11:14:38.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T11:15:38.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T11:16:38.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T11:17:39.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-24T11:18:39.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T11:19:39.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-24T11:20:39.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T11:21:40.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T11:22:40.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T11:23:40.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T11:24:41.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T11:25:41.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T11:26:41.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T11:27:41.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T11:28:42.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T11:29:42.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T11:30:42.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T11:31:42.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T11:32:43.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-24T11:33:43.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T11:34:43.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-24T11:35:43.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T11:36:44.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T11:37:44.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-24T11:38:44.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T11:39:44.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T11:40:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T11:41:45.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T11:42:45.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T11:43:45.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T11:44:46.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T11:45:46.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-24T11:46:46.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T11:47:46.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T11:48:47.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T11:49:47.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T11:50:47.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T11:51:47.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T11:52:48.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T11:53:48.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T11:54:48.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T11:55:48.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T11:56:49.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T11:57:49.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T11:58:49.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T11:59:49.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T12:00:50.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T12:01:50.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T12:02:50.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T12:03:50.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T12:04:51.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T12:05:51.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T12:06:51.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T12:07:51.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-24T12:08:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T12:09:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T12:10:52.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T12:11:52.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T12:12:53.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T12:13:53.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T12:14:53.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T12:15:53.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T12:16:54.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T12:17:54.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T12:18:54.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T12:19:54.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T12:20:55.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T12:21:55.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T12:22:55.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T12:23:55.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T12:24:56.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T12:25:56.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T12:26:56.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T12:27:56.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T12:28:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T12:29:57.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T12:30:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T12:31:57.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T12:32:58.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T12:33:58.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T12:34:58.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T12:35:58.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T12:36:59.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T12:37:59.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T12:38:59.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T12:39:59.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T12:41:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T12:42:00.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T12:43:00.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T12:44:00.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T12:45:01.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T12:46:01.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T12:47:01.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T12:48:01.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T12:49:02.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T12:50:02.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T12:51:02.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T12:52:02.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T12:53:02.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T12:54:03.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T12:55:03.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T12:56:03.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T12:57:03.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T12:58:04.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T12:59:04.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T13:00:04.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T13:01:04.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T13:02:05.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T13:03:05.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T13:04:05.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T13:05:05.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T13:06:06.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T13:07:06.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T13:08:06.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T13:09:07.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T13:10:07.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-24T13:11:07.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T13:12:07.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T13:13:08.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T13:14:08.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T13:15:08.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T13:16:08.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T13:17:09.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T13:18:09.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T13:19:09.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T13:20:09.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T13:21:09.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T13:22:10.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T13:23:10.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T13:24:10.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T13:25:10.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T13:26:11.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-24T13:27:11.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T13:28:11.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T13:29:11.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T13:30:12.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T13:31:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T13:32:12.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T13:33:12.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T13:34:13.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T13:35:13.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T13:36:13.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T13:37:13.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T13:38:14.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T13:39:14.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T13:40:14.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T13:41:14.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T13:42:15.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-24T13:43:15.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T13:44:15.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T13:45:15.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T13:46:16.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T13:47:16.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T13:48:16.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-24T13:49:16.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T13:50:17.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T13:51:17.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T13:52:17.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T13:53:17.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T13:54:17.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T13:55:18.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T13:56:18.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-24T13:57:18.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T13:58:18.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T13:59:19.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T14:00:19.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T14:01:19.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T14:02:19.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T14:03:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T14:04:20.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T14:05:20.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T14:06:20.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T14:07:21.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T14:08:21.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T14:09:21.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T14:10:21.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T14:11:22.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T14:12:22.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T14:13:22.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T14:14:22.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T14:15:23.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T14:16:23.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T14:17:23.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T14:18:23.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T14:19:24.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T14:20:24.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T14:21:24.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T14:22:24.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T14:23:25.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T14:24:25.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T14:25:25.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T14:26:25.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T14:27:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T14:28:26.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T14:29:26.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T14:30:26.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T14:31:26.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T14:32:27.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T14:33:27.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T14:34:27.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-24T14:35:27.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T14:36:28.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T14:37:28.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T14:38:28.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T14:39:28.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T14:40:29.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T14:41:29.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T14:42:29.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T14:43:29.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T14:44:30.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T14:45:30.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T14:46:30.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T14:47:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T14:48:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T14:49:31.000Z",
        "cpu_usage": 8
    },
    {
        "date": "2021-05-24T14:50:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T14:51:31.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T14:52:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T14:53:32.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T14:54:32.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T14:55:32.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T14:56:33.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T14:57:33.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T14:58:33.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T14:59:33.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T15:00:34.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T15:01:34.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T15:02:34.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T15:03:34.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T15:04:34.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-24T15:05:35.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T15:06:35.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T15:07:35.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T15:08:35.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T15:09:36.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T15:10:36.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T15:11:36.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T15:12:36.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T15:13:37.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T15:14:37.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T15:15:37.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T15:16:37.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T15:17:38.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T15:18:38.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T15:19:38.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-24T15:20:38.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T15:21:39.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T15:22:39.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T15:23:39.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T15:24:39.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-24T15:25:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T15:26:40.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T15:27:40.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T15:28:40.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T15:29:41.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T15:30:41.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T15:31:41.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T15:32:41.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T15:33:42.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T15:34:42.000Z",
        "cpu_usage": 8
    },
    {
        "date": "2021-05-24T15:35:42.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T15:36:42.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T15:37:42.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T15:38:43.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T15:39:43.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T15:40:43.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T15:41:43.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T15:42:44.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T15:43:44.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T15:44:44.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T15:45:44.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T15:46:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T15:47:45.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T15:48:45.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T15:49:45.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-24T15:50:46.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T15:51:46.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T15:52:46.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T15:53:46.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T15:54:47.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-24T15:55:47.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T15:56:47.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T15:57:47.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T15:58:48.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T15:59:48.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T16:00:48.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T16:01:48.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T16:02:49.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T16:03:49.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T16:04:49.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T16:05:49.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T16:06:50.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T16:07:50.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T16:08:50.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T16:09:50.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T16:10:50.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T16:11:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T16:12:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T16:13:51.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T16:14:51.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T16:15:52.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T16:16:52.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T16:17:52.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T16:18:52.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T16:19:53.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T16:20:53.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T16:21:53.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T16:22:53.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T16:23:54.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T16:24:54.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T16:25:54.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T16:26:54.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T16:27:55.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T16:28:55.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T16:29:55.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T16:30:55.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T16:31:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T16:32:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T16:33:56.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T16:34:56.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T16:35:57.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T16:36:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T16:37:57.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T16:38:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T16:39:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T16:40:58.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T16:41:58.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T16:42:58.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T16:43:58.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T16:44:59.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T16:45:59.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T16:46:59.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T16:47:59.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T16:49:00.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T16:50:00.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T16:51:00.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T16:52:00.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T16:53:01.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T16:54:01.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T16:55:01.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T16:56:01.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T16:57:02.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T16:58:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T16:59:02.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T17:00:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T17:01:03.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T17:02:03.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T17:03:03.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T17:04:03.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T17:05:04.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T17:06:04.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T17:07:04.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T17:08:04.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T17:09:04.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T17:10:05.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T17:11:05.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T17:12:05.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T17:13:05.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T17:14:06.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T17:15:06.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T17:16:06.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T17:17:06.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T17:18:07.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T17:19:07.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T17:20:07.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T17:21:07.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T17:22:07.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T17:23:08.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T17:24:08.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T17:25:08.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T17:26:08.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T17:27:09.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T17:28:09.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T17:29:09.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T17:30:09.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T17:31:10.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-24T17:32:10.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T17:33:10.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T17:34:10.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T17:35:11.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-24T17:36:11.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T17:37:11.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T17:38:11.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T17:39:12.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T17:40:12.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T17:41:12.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T17:42:12.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T17:43:13.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T17:44:13.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T17:45:13.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T17:46:13.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-24T17:47:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T17:48:14.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T17:49:14.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T17:50:14.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T17:51:14.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T17:52:15.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T17:53:15.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T17:54:15.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T17:55:15.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T17:56:16.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T17:57:16.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T17:58:16.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T17:59:16.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T18:00:16.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-24T18:01:17.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T18:02:17.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T18:03:17.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T18:04:17.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T18:05:18.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T18:06:18.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T18:07:18.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T18:08:18.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T18:09:19.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T18:10:19.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T18:11:19.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T18:12:19.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T18:13:20.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T18:14:20.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T18:15:20.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T18:16:20.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T18:17:21.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T18:18:21.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T18:19:21.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T18:20:21.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T18:21:22.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T18:22:22.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T18:23:22.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T18:24:22.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T18:25:22.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T18:26:23.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T18:27:23.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T18:28:23.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T18:29:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T18:30:24.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T18:31:24.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T18:32:24.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T18:33:24.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T18:34:25.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T18:35:25.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-24T18:36:25.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T18:37:25.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T18:38:26.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T18:39:26.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T18:40:26.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T18:41:26.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T18:42:27.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T18:43:27.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T18:44:27.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T18:45:27.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T18:46:28.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-24T18:47:28.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T18:48:28.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T18:49:28.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T18:50:28.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T18:51:29.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T18:52:29.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T18:53:29.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T18:54:29.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T18:55:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T18:56:30.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T18:57:30.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T18:58:30.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T18:59:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T19:00:31.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T19:01:31.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T19:02:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T19:03:32.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T19:04:32.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T19:05:32.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T19:06:32.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T19:07:33.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T19:08:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T19:09:33.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T19:10:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T19:11:34.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T19:12:34.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T19:13:34.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T19:14:35.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T19:15:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T19:16:35.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T19:17:35.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T19:18:36.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T19:19:36.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T19:20:36.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-24T19:21:36.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T19:22:37.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T19:23:37.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T19:24:37.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T19:25:37.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T19:26:38.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T19:27:38.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T19:28:38.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T19:29:39.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T19:30:39.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T19:31:39.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T19:32:39.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T19:33:40.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T19:34:40.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T19:35:40.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T19:36:40.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T19:37:41.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T19:38:41.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-24T19:39:41.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T19:40:41.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T19:41:42.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T19:42:42.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T19:43:42.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T19:44:42.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T19:45:43.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T19:46:43.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T19:47:43.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T19:48:44.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T19:49:44.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T19:50:44.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T19:51:44.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T19:52:45.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T19:53:45.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T19:54:45.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T19:55:45.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T19:56:46.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T19:57:46.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T19:58:46.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T19:59:46.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T20:00:47.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T20:01:47.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T20:02:47.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T20:03:48.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T20:04:48.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T20:05:48.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T20:06:48.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T20:07:49.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T20:08:49.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T20:09:49.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T20:10:49.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T20:11:50.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T20:12:50.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T20:13:50.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T20:14:50.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T20:15:51.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-24T20:16:51.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T20:17:51.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T20:18:51.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T20:19:52.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T20:20:52.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-24T20:21:52.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T20:22:52.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T20:23:53.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T20:24:53.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T20:25:53.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T20:26:53.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T20:27:54.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T20:28:54.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T20:29:54.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-24T20:30:54.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T20:31:55.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T20:32:55.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T20:33:55.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T20:34:56.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T20:35:56.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-24T20:36:56.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T20:37:56.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T20:38:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T20:39:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T20:40:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T20:41:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T20:42:58.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T20:43:58.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T20:44:58.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T20:45:58.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T20:46:59.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T20:47:59.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T20:48:59.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T20:49:59.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T20:50:59.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T20:52:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T20:53:00.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T20:54:00.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T20:55:01.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T20:56:01.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T20:57:01.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T20:58:01.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T20:59:02.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T21:00:02.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T21:01:02.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T21:02:02.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T21:03:03.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T21:04:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T21:05:03.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T21:06:03.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T21:07:04.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T21:08:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T21:09:04.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T21:10:04.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T21:11:05.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T21:12:05.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T21:13:05.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T21:14:06.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T21:15:06.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T21:16:06.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T21:17:06.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T21:18:06.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T21:19:07.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T21:20:07.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T21:21:07.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T21:22:07.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T21:23:08.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T21:24:08.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T21:25:08.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-24T21:26:08.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T21:27:09.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T21:28:09.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T21:29:09.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T21:30:09.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T21:31:10.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T21:32:10.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T21:33:10.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T21:34:11.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T21:35:11.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T21:36:11.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T21:37:11.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T21:38:12.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T21:39:12.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T21:40:12.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T21:41:12.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T21:42:13.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T21:43:13.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T21:44:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T21:45:13.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T21:46:14.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T21:47:14.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T21:48:14.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T21:49:14.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T21:50:15.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T21:51:15.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T21:52:15.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T21:53:15.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T21:54:16.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T21:55:16.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T21:56:16.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T21:57:16.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T21:58:16.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T21:59:17.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T22:00:17.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T22:01:17.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T22:02:17.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T22:03:18.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T22:04:18.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T22:05:18.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T22:06:19.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T22:07:19.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T22:08:19.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T22:09:19.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T22:10:20.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T22:11:20.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T22:12:20.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T22:13:20.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T22:14:21.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T22:15:21.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T22:16:21.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T22:17:21.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T22:18:22.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T22:19:22.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T22:20:22.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T22:21:22.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T22:22:23.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T22:23:23.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T22:24:23.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T22:25:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T22:26:24.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T22:27:24.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T22:28:24.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T22:29:24.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T22:30:25.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T22:31:25.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T22:32:25.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-24T22:33:25.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T22:34:26.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T22:35:26.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-24T22:36:26.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T22:37:26.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T22:38:27.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T22:39:27.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T22:40:27.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T22:41:27.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T22:42:28.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T22:43:28.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T22:44:28.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-24T22:45:28.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T22:46:29.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T22:47:29.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T22:48:29.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T22:49:29.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T22:50:30.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-24T22:51:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T22:52:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T22:53:30.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T22:54:31.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T22:55:31.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T22:56:31.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T22:57:31.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T22:58:32.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T22:59:32.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T23:00:32.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T23:01:32.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T23:02:33.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T23:03:33.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T23:04:33.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T23:05:33.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-24T23:06:34.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T23:07:34.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T23:08:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T23:09:34.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T23:10:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T23:11:35.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-24T23:12:35.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T23:13:35.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T23:14:36.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T23:15:36.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-24T23:16:36.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-24T23:17:36.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T23:18:37.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T23:19:37.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T23:20:37.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T23:21:37.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T23:22:38.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T23:23:38.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T23:24:38.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T23:25:38.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T23:26:39.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T23:27:39.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T23:28:39.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T23:29:39.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T23:30:40.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T23:31:40.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T23:32:40.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T23:33:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T23:34:41.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T23:35:41.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-24T23:36:41.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T23:37:41.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T23:38:42.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T23:39:42.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-24T23:40:42.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T23:41:42.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T23:42:43.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T23:43:43.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T23:44:43.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T23:45:43.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T23:46:44.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-24T23:47:44.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T23:48:44.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-24T23:49:44.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-24T23:50:45.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-24T23:51:45.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T23:52:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-24T23:53:45.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T23:54:46.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-24T23:55:46.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-24T23:56:46.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-24T23:57:46.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-24T23:58:47.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-24T23:59:47.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T00:00:47.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T00:01:47.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T00:02:48.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T00:03:48.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T00:04:48.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T00:05:48.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T00:06:49.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T00:07:49.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T00:08:49.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T00:09:49.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T00:10:50.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T00:11:50.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T00:12:50.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T00:13:50.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T00:14:51.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T00:15:51.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T00:16:51.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T00:17:51.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T00:18:52.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T00:19:52.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T00:20:52.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T00:21:52.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T00:22:53.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T00:23:53.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T00:24:53.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T00:25:53.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T00:26:54.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T00:27:54.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T00:28:54.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T00:29:54.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T00:30:55.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T00:31:55.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T00:32:55.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T00:33:55.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T00:34:56.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T00:35:56.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-25T00:36:56.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T00:37:56.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T00:38:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T00:39:57.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T00:40:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T00:41:57.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T00:42:58.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T00:43:58.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T00:44:58.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T00:45:58.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T00:46:59.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T00:47:59.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T00:48:59.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T00:49:59.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T00:51:00.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T00:52:00.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T00:53:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T00:54:00.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T00:55:01.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T00:56:01.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T00:57:01.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T00:58:01.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T00:59:02.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T01:00:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T01:01:02.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T01:02:02.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T01:03:03.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T01:04:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T01:05:03.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T01:06:03.000Z",
        "cpu_usage": 7.9
    },
    {
        "date": "2021-05-25T01:07:04.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T01:08:04.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T01:09:04.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T01:10:04.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T01:11:04.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T01:12:05.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T01:13:05.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T01:14:05.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T01:15:05.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T01:16:06.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T01:17:06.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T01:18:06.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T01:19:06.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T01:20:07.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T01:21:07.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-25T01:22:07.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T01:23:07.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T01:24:08.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T01:25:08.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T01:26:08.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T01:27:08.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T01:28:09.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T01:29:09.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T01:30:09.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T01:31:09.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-25T01:32:10.000Z",
        "cpu_usage": 12.1
    },
    {
        "date": "2021-05-25T01:33:10.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T01:34:10.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T01:35:10.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T01:36:11.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-25T01:37:11.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T01:38:11.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T01:39:11.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T01:40:12.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T01:41:12.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T01:42:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T01:43:12.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T01:44:12.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T01:45:13.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T01:46:13.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-25T01:47:13.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T01:48:13.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T01:49:14.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T01:50:14.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T01:51:14.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-25T01:52:14.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T01:53:15.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T01:54:15.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T01:55:15.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T01:56:15.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T01:57:16.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T01:58:16.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T01:59:16.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T02:00:16.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T02:01:17.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T02:02:17.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T02:03:17.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T02:04:17.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T02:05:18.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T02:06:18.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-25T02:07:18.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T02:08:18.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T02:09:18.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T02:10:19.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T02:11:19.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-25T02:12:19.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T02:13:19.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T02:14:20.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T02:15:20.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T02:16:20.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T02:17:20.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T02:18:21.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T02:19:21.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T02:20:21.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T02:21:21.000Z",
        "cpu_usage": 7.9
    },
    {
        "date": "2021-05-25T02:22:21.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T02:23:22.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T02:24:22.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T02:25:22.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T02:26:22.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T02:27:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T02:28:23.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T02:29:23.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T02:30:23.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T02:31:24.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T02:32:24.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T02:33:24.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T02:34:24.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T02:35:25.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T02:36:25.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-25T02:37:25.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T02:38:25.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T02:39:25.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T02:40:26.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T02:41:26.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T02:42:26.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T02:43:26.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T02:44:27.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T02:45:27.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T02:46:27.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-25T02:47:27.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T02:48:28.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T02:49:28.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T02:50:28.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T02:51:28.000Z",
        "cpu_usage": 8
    },
    {
        "date": "2021-05-25T02:52:28.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T02:53:29.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T02:54:29.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T02:55:29.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T02:56:29.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T02:57:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T02:58:30.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T02:59:30.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T03:00:30.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:01:31.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T03:02:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T03:03:31.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T03:04:31.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T03:05:32.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T03:06:32.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-25T03:07:32.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T03:08:32.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:09:33.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T03:10:33.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T03:11:33.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T03:12:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T03:13:34.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T03:14:34.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T03:15:34.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:16:35.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T03:17:35.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T03:18:35.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T03:19:35.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T03:20:36.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T03:21:36.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-25T03:22:36.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T03:23:36.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T03:24:37.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:25:37.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T03:26:37.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T03:27:37.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T03:28:38.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:29:38.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T03:30:38.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:31:38.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T03:32:39.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T03:33:39.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T03:34:39.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:35:39.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T03:36:40.000Z",
        "cpu_usage": 7.9
    },
    {
        "date": "2021-05-25T03:37:40.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:38:40.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:39:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T03:40:41.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:41:41.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T03:42:41.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:43:41.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:44:42.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:45:42.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:46:42.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-25T03:47:42.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T03:48:43.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T03:49:43.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T03:50:43.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T03:51:43.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-25T03:52:44.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T03:53:44.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T03:54:44.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:55:44.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T03:56:45.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T03:57:45.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T03:58:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T03:59:45.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T04:00:46.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T04:01:46.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T04:02:46.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T04:03:47.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T04:04:47.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T04:05:47.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-25T04:06:47.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-25T04:07:48.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-25T04:08:48.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T04:09:48.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T04:10:48.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T04:11:49.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T04:12:49.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T04:13:49.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T04:14:49.000Z",
        "cpu_usage": 5
    },
    {
        "date": "2021-05-25T04:15:50.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T04:16:50.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T04:17:50.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T04:18:50.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T04:19:51.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-25T04:20:51.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-25T04:21:51.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T04:22:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T04:23:52.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T04:24:52.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T04:25:52.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T04:26:52.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T04:27:53.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T04:28:53.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T04:29:53.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T04:30:53.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T04:31:54.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T04:32:54.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T04:33:54.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T04:34:54.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T04:35:55.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T04:36:55.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T04:37:55.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T04:38:55.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T04:39:56.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-25T04:40:56.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T04:41:56.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T04:42:56.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T04:43:57.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T04:44:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T04:45:57.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T04:46:57.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T04:47:58.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T04:48:58.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T04:49:58.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-25T04:50:58.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T04:51:59.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T04:52:59.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T04:53:59.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-25T04:54:59.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T04:56:00.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T04:57:00.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T04:58:00.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T04:59:00.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T05:00:01.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T05:01:01.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T05:02:01.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T05:03:01.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T05:04:02.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T05:05:02.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T05:06:02.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T05:07:03.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-25T05:08:03.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T05:09:03.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T05:10:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T05:11:04.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T05:12:04.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T05:13:04.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T05:14:04.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T05:15:05.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T05:16:05.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T05:17:05.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T05:18:05.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T05:19:05.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T05:20:06.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T05:21:06.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T05:22:06.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T05:23:06.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T05:24:07.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T05:25:07.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-25T05:26:07.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T05:27:07.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T05:28:08.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T05:29:08.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T05:30:08.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T05:31:08.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T05:32:09.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T05:33:09.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T05:34:09.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T05:35:09.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T05:36:10.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T05:37:10.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T05:38:10.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T05:39:10.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T05:40:11.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T05:41:11.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T05:42:11.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T05:43:12.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T05:44:12.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T05:45:12.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T05:46:12.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T05:47:13.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T05:48:13.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T05:49:13.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T05:50:13.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T05:51:13.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T05:52:14.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T05:53:14.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T05:54:14.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T05:55:14.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T05:56:15.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T05:57:15.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T05:58:15.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T05:59:15.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T06:00:16.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T06:01:16.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T06:02:16.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T06:03:16.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T06:04:17.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T06:05:17.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T06:06:17.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T06:07:17.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T06:08:18.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T06:09:18.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T06:10:18.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T06:11:18.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T06:12:19.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T06:13:19.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T06:14:19.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T06:15:19.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T06:16:20.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T06:17:20.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T06:18:20.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T06:19:21.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T06:20:21.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T06:21:21.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T06:22:21.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T06:23:21.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T06:24:22.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T06:25:22.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T06:26:22.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T06:27:22.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T06:28:23.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T06:29:23.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T06:30:23.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T06:31:23.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T06:32:24.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T06:33:24.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T06:34:24.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T06:35:24.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-25T06:36:24.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T06:37:25.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T06:38:25.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T06:39:25.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T06:40:26.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T06:41:26.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T06:42:26.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T06:43:26.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T06:44:27.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T06:45:27.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T06:46:27.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T06:47:27.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T06:48:28.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T06:49:28.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T06:50:28.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T06:51:28.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T06:52:29.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T06:53:29.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T06:54:29.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T06:55:29.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T06:56:30.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T06:57:30.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T06:58:30.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T06:59:30.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T07:00:30.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T07:01:31.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T07:02:31.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T07:03:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T07:04:31.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T07:05:32.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T07:06:32.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T07:07:32.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:08:32.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:09:32.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T07:10:33.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-25T07:11:33.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T07:12:33.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T07:13:33.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T07:14:34.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T07:15:34.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T07:16:34.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:17:34.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T07:18:35.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T07:19:35.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T07:20:35.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:21:36.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T07:22:36.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T07:23:36.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T07:24:36.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T07:25:36.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:26:37.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:27:37.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T07:28:37.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T07:29:37.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T07:30:38.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:31:38.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T07:32:38.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T07:33:38.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:34:39.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T07:35:39.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-25T07:36:39.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T07:37:39.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T07:38:39.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:39:40.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T07:40:40.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:41:40.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-25T07:42:40.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:43:41.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-25T07:44:41.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T07:45:41.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-25T07:46:41.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T07:47:42.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-25T07:48:42.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T07:49:42.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T07:50:42.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T07:51:43.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T07:52:43.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T07:53:43.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:54:44.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T07:55:44.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T07:56:44.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T07:57:44.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T07:58:44.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T07:59:45.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T08:00:45.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T08:01:45.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T08:02:45.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T08:03:46.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T08:04:46.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T08:05:46.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T08:06:46.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T08:07:47.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-25T08:08:47.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T08:09:47.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T08:10:47.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T08:11:47.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T08:12:48.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T08:13:48.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T08:14:48.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T08:15:48.000Z",
        "cpu_usage": 5.2
    },
    {
        "date": "2021-05-25T08:16:49.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-25T08:17:49.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T08:18:49.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T08:19:49.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T08:20:50.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T08:21:50.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T08:22:50.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T08:23:50.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T08:24:51.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T08:25:51.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T08:26:51.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T08:27:51.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T08:28:52.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T08:29:52.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T08:30:52.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T08:31:52.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T08:32:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T08:33:53.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T08:34:53.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-25T08:35:53.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T08:36:53.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-25T08:37:54.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T08:38:54.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T08:39:54.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T08:40:54.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T08:41:54.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T08:42:55.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T08:43:55.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T08:44:55.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-25T08:45:55.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T08:46:56.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T08:47:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T08:48:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T08:49:56.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T08:50:56.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T08:51:57.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T08:52:57.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T08:53:57.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T08:54:57.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T08:55:58.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T08:56:58.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T08:57:58.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T08:58:58.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T08:59:59.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T09:00:59.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T09:01:59.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T09:02:59.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T09:04:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T09:05:00.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T09:06:00.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T09:07:00.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T09:08:01.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T09:09:01.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T09:10:01.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T09:11:01.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T09:12:01.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T09:13:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T09:14:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T09:15:02.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T09:16:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T09:17:03.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T09:18:03.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T09:19:03.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T09:20:03.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T09:21:03.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T09:22:04.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T09:23:04.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T09:24:04.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T09:25:04.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T09:26:05.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T09:27:05.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T09:28:05.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T09:29:05.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T09:30:06.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T09:31:06.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T09:32:06.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T09:33:06.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T09:34:07.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T09:35:07.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T09:36:07.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T09:37:07.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-25T09:38:08.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T09:39:08.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T09:40:08.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T09:41:08.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T09:42:08.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T09:43:09.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T09:44:09.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T09:45:09.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T09:46:09.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T09:47:10.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T09:48:10.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T09:49:10.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T09:50:10.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T09:51:10.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T09:52:11.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T09:53:11.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T09:54:11.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T09:55:11.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T09:56:12.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T09:57:12.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T09:58:12.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T09:59:12.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T10:00:12.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T10:01:13.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T10:02:13.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T10:03:13.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T10:04:14.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T10:05:14.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T10:06:14.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T10:07:14.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T10:08:14.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-25T10:09:15.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T10:10:15.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T10:11:15.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T10:12:15.000Z",
        "cpu_usage": 5.1
    },
    {
        "date": "2021-05-25T10:13:16.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T10:14:16.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T10:15:16.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T10:16:16.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T10:17:17.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T10:18:17.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T10:19:17.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T10:20:17.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T10:21:17.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T10:22:18.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T10:23:18.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T10:24:18.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T10:25:18.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T10:26:19.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T10:27:19.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T10:28:19.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T10:29:19.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T10:30:19.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T10:31:20.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T10:32:20.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T10:33:20.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T10:34:20.000Z",
        "cpu_usage": 5.4
    },
    {
        "date": "2021-05-25T10:35:21.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T10:36:21.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T10:37:21.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T10:38:21.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T10:39:22.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T10:40:22.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T10:41:22.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T10:42:22.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T10:43:23.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T10:44:23.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T10:45:23.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T10:46:23.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T10:47:24.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T10:48:24.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T10:49:24.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T10:50:24.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T10:51:24.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T10:52:25.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T10:53:25.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T10:54:25.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T10:55:25.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T10:56:26.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T10:57:26.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T10:58:26.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T10:59:26.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T11:00:26.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T11:01:27.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T11:02:27.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T11:03:27.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T11:04:27.000Z",
        "cpu_usage": 5.6
    },
    {
        "date": "2021-05-25T11:05:28.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T11:06:28.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T11:07:28.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T11:08:28.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T11:09:29.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T11:10:29.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T11:11:29.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T11:12:29.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T11:13:29.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T11:14:30.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T11:15:30.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T11:16:30.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T11:17:30.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T11:18:31.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T11:19:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T11:20:31.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T11:21:31.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T11:22:31.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-25T11:23:32.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T11:24:32.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-25T11:25:32.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T11:26:32.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-25T11:27:33.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T11:28:33.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T11:29:33.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T11:30:33.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T11:31:34.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T11:32:34.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T11:33:34.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T11:34:34.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T11:35:34.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T11:36:35.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-25T11:37:35.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-25T11:38:35.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T11:39:35.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T11:40:36.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T11:41:36.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T11:42:36.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T11:43:36.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T11:44:36.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T11:45:37.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T11:46:37.000Z",
        "cpu_usage": 7.7
    },
    {
        "date": "2021-05-25T11:47:37.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T11:48:37.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T11:49:38.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T11:50:38.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T11:51:38.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T11:52:38.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-25T11:53:39.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T11:54:39.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T11:55:39.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T11:56:40.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T11:57:40.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T11:58:40.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T11:59:40.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T12:00:41.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T12:01:41.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T12:02:41.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T12:03:41.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T12:04:42.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T12:05:42.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T12:06:42.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-25T12:07:42.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T12:08:43.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T12:09:43.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T12:10:43.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T12:11:43.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T12:12:44.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T12:13:44.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T12:14:44.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T12:15:44.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T12:16:45.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T12:17:45.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T12:18:45.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T12:19:45.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T12:20:46.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T12:21:46.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T12:22:46.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-25T12:23:46.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T12:24:47.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T12:25:47.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T12:26:47.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T12:27:47.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T12:28:48.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T12:29:48.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T12:30:48.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T12:31:48.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T12:32:49.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T12:33:49.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T12:34:49.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T12:35:49.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T12:36:50.000Z",
        "cpu_usage": 7.4
    },
    {
        "date": "2021-05-25T12:37:50.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T12:38:50.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T12:39:50.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T12:40:51.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T12:41:51.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T12:42:51.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T12:43:52.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T12:44:52.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T12:45:52.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T12:46:52.000Z",
        "cpu_usage": 7.8
    },
    {
        "date": "2021-05-25T12:47:52.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T12:48:53.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T12:49:53.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T12:50:53.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T12:51:53.000Z",
        "cpu_usage": 7.1
    },
    {
        "date": "2021-05-25T12:52:54.000Z",
        "cpu_usage": 7.6
    },
    {
        "date": "2021-05-25T12:53:54.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T12:54:54.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T12:55:54.000Z",
        "cpu_usage": 6.8
    },
    {
        "date": "2021-05-25T12:56:55.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T12:57:55.000Z",
        "cpu_usage": 7
    },
    {
        "date": "2021-05-25T12:58:55.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T12:59:55.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T13:00:56.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T13:01:56.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T13:02:56.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T13:03:56.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T13:04:57.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T13:05:57.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T13:06:57.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T13:07:58.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T13:08:58.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T13:09:58.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T13:10:58.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T13:11:59.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T13:12:59.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T13:13:59.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T13:14:59.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T13:16:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T13:17:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T13:18:00.000Z",
        "cpu_usage": 6.7
    },
    {
        "date": "2021-05-25T13:19:00.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T13:20:01.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T13:21:01.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T13:22:01.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T13:23:01.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T13:24:01.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T13:25:02.000Z",
        "cpu_usage": 5.3
    },
    {
        "date": "2021-05-25T13:26:02.000Z",
        "cpu_usage": 6
    },
    {
        "date": "2021-05-25T13:27:02.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T13:28:02.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T13:29:03.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T13:30:03.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T13:31:03.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T13:32:03.000Z",
        "cpu_usage": 6.9
    },
    {
        "date": "2021-05-25T13:33:04.000Z",
        "cpu_usage": 7.3
    },
    {
        "date": "2021-05-25T13:34:04.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T13:35:04.000Z",
        "cpu_usage": 6.3
    },
    {
        "date": "2021-05-25T13:36:05.000Z",
        "cpu_usage": 6.2
    },
    {
        "date": "2021-05-25T13:37:05.000Z",
        "cpu_usage": 7.5
    },
    {
        "date": "2021-05-25T13:38:05.000Z",
        "cpu_usage": 7.2
    },
    {
        "date": "2021-05-25T13:39:05.000Z",
        "cpu_usage": 6.6
    },
    {
        "date": "2021-05-25T13:40:06.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T13:41:06.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T13:42:06.000Z",
        "cpu_usage": 5.9
    },
    {
        "date": "2021-05-25T13:43:06.000Z",
        "cpu_usage": 6.5
    },
    {
        "date": "2021-05-25T13:44:07.000Z",
        "cpu_usage": 5.5
    },
    {
        "date": "2021-05-25T13:45:07.000Z",
        "cpu_usage": 6.1
    },
    {
        "date": "2021-05-25T13:46:07.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T13:47:07.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T13:48:08.000Z",
        "cpu_usage": 6.4
    },
    {
        "date": "2021-05-25T13:49:08.000Z",
        "cpu_usage": 5.7
    },
    {
        "date": "2021-05-25T13:50:08.000Z",
        "cpu_usage": 5.8
    },
    {
        "date": "2021-05-25T13:51:08.000Z",
        "cpu_usage": 6.7
    }
]
const chartConfig = {
//   desktop: { label: "Desktop", color: "#3b82f6" },
//   mobile: { label: "Mobile", color: "#10b981" },
    cpu_usage: { label: "cpu usage", color: "#10b981" },
}

export function InteractiveChart() {
  const [timeRange, setTimeRange] = React.useState("90d")
//   const [selectedKeys, setSelectedKeys] = React.useState(["desktop", "mobile"])
//   const [loadedKeys, setLoadedKeys] = React.useState(["desktop", "mobile"])
  const [selectedKeys, setSelectedKeys] = React.useState(["cpu_usage"])
  const [loadedKeys, setLoadedKeys] = React.useState(["cpu_usage"])
  const [hoverData, setHoverData] = React.useState(null)
  const [yAxisMax, setYAxisMax] = React.useState<number | undefined>(undefined)
  const [viewMode, setViewMode] = React.useState<'chart' | 'table'>('chart')
  
  // Zoom functionality state
  const [zoomDomain, setZoomDomain] = React.useState(null)
  const [isSelecting, setIsSelecting] = React.useState(false)
  const [selectionStart, setSelectionStart] = React.useState(null)
  const [selectionEnd, setSelectionEnd] = React.useState(null)
  const [lastClickTime, setLastClickTime] = React.useState(0)
  
  const chartRef = React.useRef(null);
  const chartType = 'area';

  // Filter data based on time range and zoom
  const getFilteredData = () => {
    let filtered = chartData.filter((item) => {
      const date = new Date(item.date)
      // const referenceDate = new Date("2024-06-30")
      // let daysToSubtract = 90
      // if (timeRange === "30d") daysToSubtract = 30
      // else if (timeRange === "7d") daysToSubtract = 7
      // const startDate = new Date(referenceDate)
      // startDate.setDate(startDate.getDate() - daysToSubtract)
      // return date >= startDate
      return date;
    })

    // Apply zoom filter if zoom domain is set
    if (zoomDomain) {
      filtered = filtered.filter((item) => {
        const date = new Date(item.date)
        return date >= zoomDomain.startDate && date <= zoomDomain.endDate
      })
    }

    return filtered
  }

  const filteredData = getFilteredData()

  // Handle mouse down for selection
  const handleMouseDown = (e) => {
    if (!e.activeLabel) return
    
    const currentTime = Date.now()
    const timeDiff = currentTime - lastClickTime
    
    // Check for double click (within 300ms)
    if (timeDiff < 300) {
      // Double click - reset zoom
      setZoomDomain(null)
      setLastClickTime(0)
      return
    }
    
    setLastClickTime(currentTime)
    setIsSelecting(true)
    setSelectionStart(e.activeLabel)
    setSelectionEnd(e.activeLabel)
  }

  // Handle mouse move during selection
  const handleMouseMove = (e) => {
    if (!e.activePayload) return
    
    setHoverData(e.activePayload[0]?.payload || null)
    
    if (isSelecting && e.activeLabel) {
      setSelectionEnd(e.activeLabel)
    }
  }

  // Handle mouse up to complete selection
  const handleMouseUp = () => {
    if (isSelecting && selectionStart && selectionEnd) {
      const startDate = new Date(selectionStart)
      const endDate = new Date(selectionEnd)
      
      // Ensure start is before end
      const actualStart = startDate <= endDate ? startDate : endDate
      const actualEnd = startDate <= endDate ? endDate : startDate
      
      // Only zoom if there's a meaningful selection (more than 1 day difference)
      // if (Math.abs(actualEnd - actualStart) > 24 * 60 * 60 * 1000) {
      //   setZoomDomain({
      //     startDate: actualStart,
      //     endDate: actualEnd
      //   })
      // }
      if (Math.abs(actualEnd - actualStart) > 60 * 1000) {
        setZoomDomain({
          startDate: actualStart,
          endDate: actualEnd
        })
      }
    }
    
    setIsSelecting(false)
    setSelectionStart(null)
    setSelectionEnd(null)
  }

  const handleMouseLeave = () => {
    setHoverData(null)
    if (isSelecting) {
      setIsSelecting(false)
      setSelectionStart(null)
      setSelectionEnd(null)
    }
  }

  return (
    <Card className="pt-0 col-span-2 border-none shadow-none">
      <CardHeader className="flex items-center gap-2 space-y-0 py-1 sm:flex-row px-2">
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-2">
            <Label htmlFor="yaxis-max" className="text-sm">Y-axis max</Label>
            <Input
              id="yaxis-max"
              type="number"
              placeholder="Auto"
              value={yAxisMax || ''}
              onChange={(e) => setYAxisMax(e.target.value ? Number(e.target.value) : undefined)}
              className="w-20 h-8"
            />
          </div>
          <div className="flex rounded-md border">
            <Button
              variant={viewMode === 'chart' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('chart')}
              className="rounded-r-none h-8"
            >
              <BarChart3 size={16} />
            </Button>
            <Button
              variant={viewMode === 'table' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('table')}
              className="rounded-l-none h-8"
            >
              <TableIcon size={16} />
            </Button>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex">
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl bg-background">
              <SelectItem value="90d">Last 3 months</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="p-0 h-[350px] overflow-auto">
        {viewMode === 'chart' ? (
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 p-2 relative">
              {/* Selection overlay */}
              {isSelecting && selectionStart && selectionEnd && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div 
                    className="absolute bg-blue-200 bg-opacity-30"
                    style={{
                      left: `${Math.min(
                        (filteredData.findIndex(d => d.date === selectionStart) / (filteredData.length - 1)) * 100,
                        (filteredData.findIndex(d => d.date === selectionEnd) / (filteredData.length - 1)) * 100
                      )}%`,
                      width: `${Math.abs(
                        (filteredData.findIndex(d => d.date === selectionEnd) / (filteredData.length - 1)) * 100 -
                        (filteredData.findIndex(d => d.date === selectionStart) / (filteredData.length - 1)) * 100
                      )}%`,
                      top: '0',
                      bottom: '0'
                    }}
                  />
                </div>
              )}
              <ChartContainer 
                config={chartConfig} 
                className="aspect-auto min-h-[300px] w-full"
                ref={chartRef}
              >
                <ResponsiveContainer minHeight={"300px"}>
                  <AreaChart
                    data={filteredData}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                  >
                  {chartType === 'area' && <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>}
                  {/* <CartesianGrid horizontal={false} /> */}
                  <Tooltip content={<></>}/>
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={(value) =>
                      new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }
                  />
                  <YAxis 
                    domain={yAxisMax ? [0, yAxisMax] : ['auto', 'auto']}
                    scale={'auto'}
                    tickLine={false}
                    axisLine={false}
                    allowDataOverflow
                  />
                  {/* {loadedKeys.includes("desktop") && (
                    <Area 
                      dataKey="desktop" 
                      type="natural" 
                      fill="url(#fillDesktop)" 
                      stroke="#3b82f6" 
                      // stackId="a"
                      activeDot={<Dot fill="#3b82f6" />}
                      isAnimationActive={false}
                    />
                  )} */}
                  {loadedKeys.includes("cpu_usage") && (
                    <Area 
                      dataKey="cpu_usage" 
                      type="natural" 
                      fill="url(#fillMobile)" 
                      stroke="#10b981" 
                      // stackId="a"
                      activeDot={<Dot fill="#10b981" />}
                      isAnimationActive={false}
                    />
                  )}
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="col-span-1 flex flex-col justify-between border-l p-2">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground text-left font-medium">
                  {hoverData?.date||"timestamp"}
                </div>

                <div>
                  {Object.entries(chartConfig).map(([key, { label, color }]) => {
                    const checked = selectedKeys.includes(key)
                    const isLoaded = loadedKeys.includes(key)
                    const value = hoverData?.[key]
                    return (
                      <label key={key} className="flex items-center justify-between transition-colors p-1 rounded">
                        <div className="flex items-center space-x-2 cursor-pointer">
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(checked) => {
                              setSelectedKeys((prev) =>
                                checked ? [...prev, key] : prev.filter((k) => k !== key)
                              )
                            }}
                          />
                          <span className="font-normal text-sm lowercase break-words" style={{ color }}>{label}</span>
                        </div>
                        {checked && isLoaded && hoverData && (
                          <span className="text-xs font-normal text-muted-foreground">{value}</span>
                        )}
                      </label>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-2">
                {zoomDomain && (
                  <div className="text-xs text-muted-foreground">
                    <div>Zoomed Range:</div>
                    <div>{zoomDomain.startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</div>
                    <div>to</div>
                    <div>{zoomDomain.endDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</div>
                  </div>
                )}
                
                <button
                  onClick={() => setLoadedKeys([...selectedKeys])}
                  disabled={JSON.stringify(loadedKeys) === JSON.stringify(selectedKeys) || !selectedKeys.length}
                  className="w-full rounded bg-primary text-white px-4 py-2 hover:bg-brand/90 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  Load
                </button>
              </div>
            </div>
          </div>
        ) : (
          <VirtualTabularData headers={["Date", "cpu usage"]} data={filteredData}/>
        )}
      </CardContent>
    </Card>
  )
}
