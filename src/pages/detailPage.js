import React, { Component } from "react";
import Header from "../parts/Header";
import BreadcrumbParts from "../parts/BreadcrumbParts";
import DetailItems from "../parts/DetailItems";
import Feature from "../parts/FeatureProduk";
import Deskripsi from "../parts/DeskripsiProduk";
import OurItems from "../parts/OurItems";
import Footer from "../parts/Footer";

import detailPages from "../json/detailPages.json";

export default class detailPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const itembreadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Item Details", pageHref: "" },
    ];
    return (
      <div>
        <Header></Header>
        <BreadcrumbParts dataBreadcrumb={itembreadcrumb}></BreadcrumbParts>
        <DetailItems dataDetail={detailPages}></DetailItems>
        <Feature dataDetail={detailPages.spesifikasi}></Feature>
        <Deskripsi></Deskripsi>
        <OurItems dataOur={detailPages.ourItems}></OurItems>
        <Footer></Footer>
      </div>
    );
  }
}
