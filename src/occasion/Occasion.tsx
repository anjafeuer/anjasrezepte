import * as React from "react";
import {Card, Table} from "@material-ui/core";

export function Occasion(){
    return (
        <div>
            <p>There are many occasions for writing a special card.</p>
            <Card>
                <Table>
                    <ul>Flower Theme</ul>
                    <ul>Travel Theme</ul>
                    <ul>Birthday Theme</ul>
                    <ul>Food Theme</ul>
                    <ul>And many more</ul>
                </Table>


            </Card>
        </div>
    )
}