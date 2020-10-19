//$(document).ready(function() {
//        $('#table-managed').DataTable({
//
//        "pageLength": 20,
//        searching:false,
////        retrieve: true,
//
//    });
//    $('.table-defs').DataTable({
//        destroy: true,
//        "language": {
//                "lengthMenu": " _MENU_ 筆記錄",
//                "paging": {
//                    "previous": "上一頁",
//                    "next": "下一頁",
//                    "last": "最後一頁",
//                    "first": "第一頁"
//                },
//                "search": "搜尋:",
//                "info":           "Showing _START_ to _END_ of _TOTAL_ entries",
//                "infoEmpty":      "Showing 0 to 0 of 0 entries",
//            },
//
//    });
//
//
//});

var TableManaged = function () {
    var tableMge = function () {
        var table = $('.table-defs');
        table.dataTable({
//            "columns": [{
//                "orderable": false
//            }, {
//                "orderable": false
//            }, {
//                "orderable": false
//            }, {
//                "orderable": false
//            }, {
//                "orderable": false
//            }, {
//                "orderable": false
//            }],
            "lengthMenu": [
                [10, 20, 50, -1],
                [10, 20, 50, "全部"] // change per page values here
            ],
            // set the initial value
            "pageLength": 20,
            "language": {
                "lengthMenu": " _MENU_ 筆記錄",
                "paging": {
                    "previous": "上一頁",
                    "next": "下一頁",
                    "last": "最後一頁",
                    "first": "第一頁"
                },
                "search": "搜尋:",
                "info": "顯示 _START_ 到 _END_筆, 共 _TOTAL_ 筆記錄",
                "infoEmpty": "顯示 0 到 0筆, 共 0 筆記錄",
                "loadingRecords": "讀取中...",
                "processing": "處理中，請稍待...",
                "zeroRecords": "沒有符合的資料",
            },
//            searching:false,
            "ordering": false,
        });

//        var tableWrapper = jQuery('#sample_2_wrapper');
//
//        table.find('.group-checkable').change(function () {
//            var set = jQuery(this).attr("data-set");
//            var checked = jQuery(this).is(":checked");
//            jQuery(set).each(function () {
//                if (checked) {
//                    $(this).attr("checked", true);
//                } else {
//                    $(this).attr("checked", false);
//                }
//            });
//            jQuery.uniform.update(set);
//        });
//
//        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }

    return {

        //main function to initiate the module
        init: function () {
            if (!jQuery().dataTable) {
                return;
            }

            tableMge();
        }

    };

}();
