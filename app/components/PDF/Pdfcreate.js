import React, { useEffect, useState } from "react";

import {
  Page,
  Line,
  Svg,
  Text,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import BIcon from "./BinghamtonIcon.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 12,
    fontFamily: "Times-Roman",
  },
  horiLine: {
    width: 1000,
    height: 1,
    top: 2,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  bIcon: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    height: "80%",
    width: "100%",
    top: "15%",
    left: "5%",
    opacity: 0.06,
    margin: 10,
  },
  sname: {
    position: "relative",
    top: 20,
    left: 0,
    fontSize: 18,
    fontWeight: 600,
    fontFamily: "Times-Roman",
  },
  bNumber: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Times-Roman",
  },
  date: {
    top: 23,
    fontSize: 14,
    fontWeight: 200,
    color: "grey",
    marginBottom: 40,
  },
  Score: {
    position: "relative",
    top: 40,
    left: 20,
    fontSize: 28,
    textAlign: "left",
    color: "#FA8D33",
  },
  text: {
    top: 1,
    left: 65,
    marginBottom: 7,
    fontSize: 16,
    fontWeight: 600,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  comment: {
    left: 65,
    marginRight: 100,
    fontSize: 14,
    fontWeight: 400,
    textAlign: "justify",
    fontFamily: "Times-Roman",
    flexWrap: "wrap",
    color: "#525252",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 460,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  svgLine: {
    marginBottom: 20,
    left: -35,
    backgroundColor: "#E5E4E2",
    height: 1,
    top: 10,
    width: 600,
  },
});

import React from "react";

export const Pdfcreate = () => {
  return <div>Pdfcreate</div>;
};
