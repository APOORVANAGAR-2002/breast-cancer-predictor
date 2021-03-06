(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
    [0], {
        63: function(e, t, n) {},
        64: function(e, t, n) {},
        90: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                i = n.n(a),
                c = n(9),
                r = n.n(c),
                s = (n(63), n(64), n(120)),
                o = n(54),
                l = n(129),
                d = n(123),
                j = n(125),
                u = n(126),
                b = (n(65), n.p + "media/magnifyingLens.db68cd96.jpg"),
                x = n(4),
                m = Object(s.a)((function(e) {
                    return {
                        root: {
                            padding: "30px 10px 30px 10px",
                            textAlign: "center"
                        },
                        image: {
                            width: "80%",
                            padding: "20px",
                            borderRadius: "20%"
                        }
                    }
                })),
                p = Object(o.a)();

            function h() {
                var e = m();
                return Object(x.jsxs)(d.a, {
                    container: !0,
                    style: {
                        background: "#6471b5"
                    },
                    children: [Object(x.jsx)(d.a, {
                        item: !0,
                        xs: 12,
                        sm: 4,
                        style: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center"
                        },
                        children: Object(x.jsx)("img", {
                            src: b,
                            className: e.image,
                            alt: "Magniying Lens"
                        })
                    }), Object(x.jsx)(d.a, {
                        item: !0,
                        xs: 12,
                        sm: 8,
                        style: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "0px 20px 20px 20px",
                            textAlign: "justify",
                            color: "#cfe9fa"
                        },
                        children: Object(x.jsx)(j.a, {
                            theme: p,
                            children: Object(x.jsx)(u.a, {
                                variant: "body1",
                                children: "Breast cancer (BC) is one of the most common cancers among women worldwide, representing the majority of new cancer cases and cancer-related deaths according to global statistics, making it a significant public health problem in today\u2019s society."
                            })
                        })
                    })]
                })
            }
            p = Object(l.a)(p);
            var g = n(11),
                f = n(37),
                O = n(17),
                y = n(127),
                v = n(128),
                C = n(53),
                k = n.n(C),
                w = Object(s.a)((function(e) {
                    return {
                        root: {
                            padding: "30px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center"
                        },
                        input: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "10px"
                        }
                    }
                })),
                I = {
                    radius: "",
                    texture: "",
                    perimeter: "",
                    area: "",
                    smoothness: ""
                };
            var N = function() {
                    var e = w(),
                        t = Object(a.useState)(I),
                        n = Object(O.a)(t, 2),
                        i = n[0],
                        c = n[1],
                        r = function(e) {
                            var t = e.target,
                                n = t.name,
                                a = t.value;
                            c(Object(f.a)(Object(f.a)({}, i), {}, Object(g.a)({}, n, a)))
                        };
                    return Object(x.jsxs)(d.a, {
                        container: !0,
                        style: {
                            background: "#cfe9fa"
                        },
                        children: [Object(x.jsxs)(d.a, {
                            container: !0,
                            component: "form",
                            className: e.root,
                            children: [Object(x.jsxs)(d.a, {
                                item: !0,
                                className: e.input,
                                children: [Object(x.jsx)(u.a, {
                                    variant: "body1",
                                    children: "mean_radius"
                                }), Object(x.jsx)(y.a, {
                                    id: "outlined-basic",
                                    label: "Input-1",
                                    variant: "outlined",
                                    size: "small",
                                    name: "radius",
                                    value: i.radius,
                                    onChange: r
                                })]
                            }), Object(x.jsxs)(d.a, {
                                item: !0,
                                className: e.input,
                                children: [Object(x.jsx)(u.a, {
                                    variant: "body1",
                                    children: "mean_texture"
                                }), Object(x.jsx)(y.a, {
                                    id: "outlined-basic",
                                    label: "Input-2",
                                    variant: "outlined",
                                    size: "small",
                                    name: "texture",
                                    value: i.texture,
                                    onChange: r
                                })]
                            }), Object(x.jsxs)(d.a, {
                                item: !0,
                                className: e.input,
                                children: [Object(x.jsx)(u.a, {
                                    variant: "body1",
                                    children: "mean_perimeter"
                                }), Object(x.jsx)(y.a, {
                                    id: "outlined-basic",
                                    label: "Input-3",
                                    variant: "outlined",
                                    size: "small",
                                    name: "perimeter",
                                    value: i.perimeter,
                                    onChange: r
                                })]
                            }), Object(x.jsxs)(d.a, {
                                item: !0,
                                className: e.input,
                                children: [Object(x.jsx)(u.a, {
                                    variant: "body1",
                                    children: "mean_area"
                                }), Object(x.jsx)(y.a, {
                                    id: "outlined-basic",
                                    label: "Input-4",
                                    variant: "outlined",
                                    size: "small",
                                    name: "area",
                                    value: i.area,
                                    onChange: r
                                })]
                            }), Object(x.jsxs)(d.a, {
                                item: !0,
                                className: e.input,
                                children: [Object(x.jsx)(u.a, {
                                    variant: "body1",
                                    children: "mean_smoothness"
                                }), Object(x.jsx)(y.a, {
                                    id: "outlined-basic",
                                    label: "Input-5",
                                    variant: "outlined",
                                    size: "small",
                                    name: "smoothness",
                                    value: i.smoothness,
                                    onChange: r
                                })]
                            })]
                        }), Object(x.jsx)(d.a, {
                            container: !0,
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                padding: "30px"
                            },
                            children: Object(x.jsx)(d.a, {
                                item: !0,
                                children: Object(x.jsx)(v.a, {
                                    variant: "contained",
                                    color: "primary",
                                    onClick: function(e) {
                                        console.log(i), k.a.post("http://localhost:5000/submit", i).then((function(e) {
                                            console.log(e.data.result)
                                        })).catch((function(e) {
                                            console.log(e)
                                        }))
                                        
                                    },
                                    children: "Submit"
                                })
                            })
                        })]
                    })
                },
                D = Object(s.a)((function(e) {
                    return {
                        root: {
                            minHeight: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            backgroundImage: "url(/image/backdrop.png)",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            overflowX: "hidden",
                            paddingBottom: "50px"
                        },
                        heading: {
                            color: "#cfe9fa",
                            textAlign: "center",
                            fontWeight: "700"
                        }
                    }
                })),
                R = Object(o.a)();

            function z() {
                var e = D();
                return Object(x.jsx)(d.a, {
                    container: !0,
                    className: e.root,
                    children: Object(x.jsx)(d.a, {
                        item: !0,
                        xs: 12,
                        className: e.home,
                        children: Object(x.jsx)(j.a, {
                            theme: R,
                            children: Object(x.jsx)(u.a, {
                                className: e.heading,
                                variant: "h2",
                                children: "BREAST CANCER PREDICTOR"
                            })
                        })
                    })
                })
            }
            R = Object(l.a)(R);
            var A = Object(s.a)((function(e) {
                return {
                    root: {
                        padding: "30px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        background: "#6471b5"
                    },
                    input: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px",
                        background: "baa4d3"
                    }
                }
            }));

            function B() {
                var e = A();
                let txt1 = "Result here: "
                window.onload = function() {
                    // Now you can access to myVar1 directly
                    // console.log(myVar1);
                    let txt2 = myVar1;
                    txt1.concat(txt2)
                 };

                return Object(x.jsx)(d.a, {
                    container: !0,
                    className: e.root,
                    children: Object(x.jsx)(d.a, {
                        item: !0,
                        style: {
                            border: "2px solid #cfe9fa",
                            background: "#04aae2",
                            borderRadius: "25%",
                            textAlign: "center",
                            padding: "10px"
                        },
                        children: Object(x.jsx)(u.a, {
                            variant: "h6",
                            children: txt1
                        }), 
                    })
                })
            }
            var S = function() {
                    return Object(x.jsxs)("div", {
                        style: {
                            background: "#6471b5",
                            height: "100vh"
                        },
                        children: [Object(x.jsx)(z, {}), Object(x.jsx)(h, {}), Object(x.jsx)(N, {}), Object(x.jsx)(B, {}), Object(x.jsxs)("p", {
                            children: ["My Token = ", window.token]
                        })]
                    })
                },
                T = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 130)).then((function(t) {
                        var n = t.getCLS,
                            a = t.getFID,
                            i = t.getFCP,
                            c = t.getLCP,
                            r = t.getTTFB;
                        n(e), a(e), i(e), c(e), r(e)
                    }))
                };
            r.a.render(Object(x.jsx)(i.a.StrictMode, {
                children: Object(x.jsx)(S, {})
            }), document.getElementById("root")), T()
        }
    },
    [
        [90, 1, 2]
    ]
]);
//# sourceMappingURL=main.020e88c8.chunk.js.map