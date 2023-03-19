import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
import socialMedia from "../../assets/images/landing/social-media.jpg";
import "./landing.css";

const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 250000 + Math.random() * 500000,
  });
}

export default function FindInfluencers() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image className="section-img" src={socialMedia} />
          </Col>
          <Col>
            <h1 className="text-white">StatFluence&trade;</h1>
            <p className="text-white">
              Utilize our proprietary StatFluence&trade; algorithm to find the
              top influencers for brands like yours. We make sure you see which
              influences can make your brands seen and increase revenues.
            </p>
            <ResponsiveContainer width={500} height={275}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
                    <stop offset="75%" stopColor="#FFFFFF" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                <Area dataKey="value" stroke="#FFFFFF" fill="url(#color)" />

                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(str) => {
                    const date = parseISO(str);
                    if (date.getDate() % 7 === 0) {
                      return format(date, "MMM, d");
                    }
                    return "";
                  }}
                />

                <YAxis
                  datakey="value"
                  axisLine={false}
                  tickLine={false}
                  tickCount={5}
                  tickFormatter={(number) => number.toLocaleString("en-US")}
                />

                <CartesianGrid opacity={0.1} vertical={false} />
              </AreaChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}
