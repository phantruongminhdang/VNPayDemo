import { useNavigate } from "react-router-dom";
import axios from "../api/VnPayApi/axiosCustomize";
import React, { useEffect, useState } from "react";

function VnPayRequest() {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        OrderType: "",
        Name: "",
        Amount: 0,
        OrderDescription: "",
    });

    useEffect(() => {
        console.log(form)
    }, [form]);

    const sendRequest = () => {
        try {
            postRequest()
                .then((data) => {
                    console.log("OK!", data)
                    window.location.href = data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    };
    const postRequest = () => {
        console.log(form);
        return axios.post(`https://dogfish-wise-probably.ngrok-free.app/api/Payment`, form);
    };

    return (
        <>
            <div class="text-center">
                <h1 class="display-4">Thanh toán VnPay</h1>
            </div>

            <div class="table-responsive">
                <div class="form-group">
                    <label >Loại hàng hóa </label>
                    <select name="OrderType" id="ordertype" class="form-control"
                        onChange={(e) =>
                            setForm({ ...form, OrderType: e.target.value })
                        }>
                        <option value="electric">Đồ điện tử</option>
                        <option value="fashion">Thời trang</option>
                        <option value="other">Khác</option>
                    </select>
                </div>
                <br />
                <div class="form-group">
                    <label>Tên khách hàng</label>
                    <input class="form-control"
                        id="Name"
                        name="Name"
                        type="text"
                        onChange={(e) =>
                            setForm({ ...form, Name: e.target.value })
                        } />
                </div>
                <br />
                <div class="form-group">
                    <label>Số tiền</label>
                    <input class="form-control"
                        id="Amount"
                        name="Amount"
                        type="text"
                        onChange={(e) =>
                            setForm({ ...form, Amount: e.target.value })
                        } />
                </div>
                <br />
                <div class="form-group">
                    <label>Nội dung thanh toán</label>
                    <textarea class="form-control"
                        cols="20"
                        id="OrderDescription"
                        name="OrderDescription"
                        rows="2"
                        value={"Thanh toán VnPay"}
                        onChange={(e) =>
                            setForm({ ...form, OrderDescription: e.target.value })
                        }></textarea>
                </div>
                <br />
                <button class="btn btn-primary" onClick={sendRequest}>Thanh toán (Checkout)</button>
            </div>
        </>
    );
}

export default VnPayRequest;