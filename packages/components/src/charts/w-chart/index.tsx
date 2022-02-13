import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
import { darken, fade } from '@material-ui/core/styles';
import * as React from 'react';
import { 
  Area, AreaProps, Bar, BarProps, CartesianGrid, CartesianGridProps, 
  // @ts-ignore
  ComposedChart, ComposedChartProps, Legend, LegendProps, Line, 
  LineProps, ResponsiveContainer, Tooltip, TooltipProps, XAxis, 
  XAxisProps, YAxis, YAxisProps
} from 'recharts';

export type ChartType = (AreaProps | BarProps | LineProps) & {
  chartType: 'area' | 'bar' | 'line';
};

export interface WChartProps extends Omit<Omit<ComposedChartProps, "width">, "height"> {
  chartData: ChartType | ChartType[];
  colors?: string[];
  height?: string | number;
  legend?: boolean | LegendProps;
  grid?: boolean | CartesianGridProps;
  tooltip?: boolean | TooltipProps<any, any>;
  width?: string;
  xAxisDataKey: string;
  xAxis?: boolean | XAxisProps;
  yAxis?: boolean | YAxisProps;
  grayColor?: string;
}

export class WChart extends React.Component<WChartProps, any> {
  static defaultProps: WChartProps = {
    colors: [
      indigo[600],
      red[600],
      teal[600],
      deepOrange[600],
      blue[600],
      deepPurple[600],
      green[600],
      orange[600],
      blueGrey[600]
    ],
    grayColor: darken('#e8eaf5', 0.25),
    height: 200,
    legend: true,
    tooltip: true,
    width: '100%',
    grid: false,
    xAxisDataKey: '',
    xAxis: true,
    yAxis: true,
    chartData: null,
  }

  private renderXAxis = () => {
    if (this.props.xAxis === false) {
      return null;
    }

    let xAxisProps = {
      dataKey: this.props.xAxisDataKey,
      scale: this.containsBar() ? "auto" : "point",
      tickSize: 0,
      minTickGap: 1,
      dy: 15,
      strokeWidth: 0.5,
      tick: { fontSize: 10, fill: this.props.grayColor },
    } as XAxisProps;

    if (typeof this.props.xAxis !== "boolean") {
      xAxisProps = { ...xAxisProps, ...this.props.xAxis };
    }

    return (
      <XAxis {...xAxisProps} />
    );
  }

  private renderYAxis = () => {
    if (this.props.yAxis === false) {
      return null;
    }

    let yAxisProps = {
      tickSize: 0,
      dx: -10,
      strokeWidth: 0.5,
      tick: { fontSize: 10, fill: this.props.grayColor }
    } as YAxisProps;

    if (typeof this.props.yAxis !== "boolean") {
      yAxisProps = { ...yAxisProps, ...this.props.yAxis };
    }

    return (
      <YAxis {...yAxisProps} />
    );
  }

  private renderLegend = () => {
    if (this.props.legend === false) {
      return null;
    }

    let legendProps = {
      align: 'right',
      verticalAlign: 'top',
      wrapperStyle: {
        // color: this.props.grayColor,
        opacity: 0.5,
        fontSize: 11
      }
    } as LegendProps;

    if (typeof this.props.legend !== "boolean") {
      legendProps = { ...legendProps, ...this.props.legend };
    }

    return (
      // @ts-ignore
      <Legend {...legendProps} />
    );
  }

  private renderTooltip = () => {
    if (this.props.tooltip === false) {
      return null;
    }

    let tooltipProps = {
      align: 'right',
      verticalAlign: 'top',
      contentStyle: {
        borderRadius: 4,
        border: 'none',
        boxShadow: '0 8px 15px rgba(125,147,178,.25)',
        padding: 10
      },
      labelStyle: {
        fontSize: 14,
        marginBottom: 5
      },
      wrapperStyle: {
        opacity: 0.9,
        fontSize: 12,
      }
    } as TooltipProps<any, any>;

    if (typeof this.props.tooltip !== "boolean") {
      tooltipProps = { ...tooltipProps, ...this.props.tooltip };
    }

    return (
      // @ts-ignore
      <Tooltip {...tooltipProps} />
    );
  }

  private renderGrid = () => {
    if (this.props.grid === false) {
      return null;
    }

    let gridProps = {
      stroke: fade(this.props.grayColor, 0.25),
      strokeDasharray: "3 3",
    } as CartesianGridProps;

    if (typeof this.props.grid !== "boolean") {
      gridProps = { ...gridProps, ...this.props.grid };
    }

    return (
      // @ts-ignore
      <CartesianGrid {...gridProps} />
    );
  }

  private renderChart = (chartData: ChartType, id: number = 0) => {
    const { chartType, ...chartProps } = chartData;

    const color = this.props.colors[id % this.props.colors.length];

    if (chartType === "area") {
      return (
        <Area stroke={color} fill={fade(color, 0.15)} type="monotone" fillOpacity={1} {...chartProps as any} />
      )
    }
    else if (chartType === "bar") {
      return (
        <Bar fill={color} fillOpacity={0.75} {...chartProps as any} />
      )
    }
    else if (chartType === "line") {
      return (
        <Line stroke={color} {...chartProps as any} />
      )
    }

    return null;
  }

  private renderCharts = () => {
    const { chartData } = this.props;

    if (Array.isArray(chartData)) {
      return chartData.map(this.renderChart);
    }
    else {
      return this.renderChart(chartData);
    }
  }

  private containsBar = (): boolean => {
    if (Array.isArray(this.props.chartData)) {
      return this.props.chartData.some(a => a.chartType === "bar");
    }
    else {
      return this.props.chartData.chartType === "bar";
    }
  }

  public render() {
    const { height, width, ...composedChartProps } = this.props;

    return (
      <ResponsiveContainer height={height} width={width}>
        <ComposedChart {...composedChartProps}>
          {this.renderXAxis()}
          {this.renderYAxis()}
          {this.renderGrid()}
          {this.renderLegend()}
          {this.renderTooltip()}
          {this.renderCharts()}
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}