window.MauSacController = function ($scope,$http) {
    $scope.MauSac = [];
    // Hàm để lấy danh sách nhân viên
    function fetchData(url, target) {
        $http({
            method: 'GET',
            url: url
        }).then(function (response) {
            $scope[target] = response.data;
        }, function (error) {
            console.error('Error fetching data:', error);
        });
    }

    // Gọi hàm lấy dữ liệu khi controller được khởi tạo
    fetchData('http://localhost:8080/api/mau_sac', 'MauSac');
}
