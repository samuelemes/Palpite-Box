export default async (req, res) => {
    res.end(JSON.stringify({
        showCoupon: false,
        message: 'Coupon Message'
    }))
}