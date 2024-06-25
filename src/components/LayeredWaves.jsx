import React from 'react'
//<svg className="w-full min-h-full" id="visual" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 406L10.7 406C21.3 406 42.7 406 64 408.3C85.3 410.7 106.7 415.3 128 410.5C149.3 405.7 170.7 391.3 192 385.2C213.3 379 234.7 381 256 386C277.3 391 298.7 399 320 402.5C341.3 406 362.7 405 384 406.8C405.3 408.7 426.7 413.3 448 417.8C469.3 422.3 490.7 426.7 512 419.3C533.3 412 554.7 393 576 386.2C597.3 379.3 618.7 384.7 640 390.5C661.3 396.3 682.7 402.7 704 404C725.3 405.3 746.7 401.7 768 402.3C789.3 403 810.7 408 832 412.2C853.3 416.3 874.7 419.7 896 414.2C917.3 408.7 938.7 394.3 949.3 387.2L960 380L960 541L949.3 541C938.7 541 917.3 541 896 541C874.7 541 853.3 541 832 541C810.7 541 789.3 541 768 541C746.7 541 725.3 541 704 541C682.7 541 661.3 541 640 541C618.7 541 597.3 541 576 541C554.7 541 533.3 541 512 541C490.7 541 469.3 541 448 541C426.7 541 405.3 541 384 541C362.7 541 341.3 541 320 541C298.7 541 277.3 541 256 541C234.7 541 213.3 541 192 541C170.7 541 149.3 541 128 541C106.7 541 85.3 541 64 541C42.7 541 21.3 541 10.7 541L0 541Z" fill="#c8e4e5"></path><path d="M0 402L10.7 401.5C21.3 401 42.7 400 64 399.7C85.3 399.3 106.7 399.7 128 400C149.3 400.3 170.7 400.7 192 407.2C213.3 413.7 234.7 426.3 256 430.8C277.3 435.3 298.7 431.7 320 427C341.3 422.3 362.7 416.7 384 413.7C405.3 410.7 426.7 410.3 448 410.2C469.3 410 490.7 410 512 410.2C533.3 410.3 554.7 410.7 576 413.8C597.3 417 618.7 423 640 420.2C661.3 417.3 682.7 405.7 704 410.3C725.3 415 746.7 436 768 437.7C789.3 439.3 810.7 421.7 832 415.3C853.3 409 874.7 414 896 419.8C917.3 425.7 938.7 432.3 949.3 435.7L960 439L960 541L949.3 541C938.7 541 917.3 541 896 541C874.7 541 853.3 541 832 541C810.7 541 789.3 541 768 541C746.7 541 725.3 541 704 541C682.7 541 661.3 541 640 541C618.7 541 597.3 541 576 541C554.7 541 533.3 541 512 541C490.7 541 469.3 541 448 541C426.7 541 405.3 541 384 541C362.7 541 341.3 541 320 541C298.7 541 277.3 541 256 541C234.7 541 213.3 541 192 541C170.7 541 149.3 541 128 541C106.7 541 85.3 541 64 541C42.7 541 21.3 541 10.7 541L0 541Z" fill="#afc9ca"></path><path d="M0 430L10.7 433.7C21.3 437.3 42.7 444.7 64 448.8C85.3 453 106.7 454 128 455.7C149.3 457.3 170.7 459.7 192 455C213.3 450.3 234.7 438.7 256 431.7C277.3 424.7 298.7 422.3 320 429.5C341.3 436.7 362.7 453.3 384 456.2C405.3 459 426.7 448 448 441.3C469.3 434.7 490.7 432.3 512 428.7C533.3 425 554.7 420 576 417.8C597.3 415.7 618.7 416.3 640 416.5C661.3 416.7 682.7 416.3 704 423.5C725.3 430.7 746.7 445.3 768 449C789.3 452.7 810.7 445.3 832 441C853.3 436.7 874.7 435.3 896 431.2C917.3 427 938.7 420 949.3 416.5L960 413L960 541L949.3 541C938.7 541 917.3 541 896 541C874.7 541 853.3 541 832 541C810.7 541 789.3 541 768 541C746.7 541 725.3 541 704 541C682.7 541 661.3 541 640 541C618.7 541 597.3 541 576 541C554.7 541 533.3 541 512 541C490.7 541 469.3 541 448 541C426.7 541 405.3 541 384 541C362.7 541 341.3 541 320 541C298.7 541 277.3 541 256 541C234.7 541 213.3 541 192 541C170.7 541 149.3 541 128 541C106.7 541 85.3 541 64 541C42.7 541 21.3 541 10.7 541L0 541Z" fill="#98aeaf"></path><path d="M0 446L10.7 447.3C21.3 448.7 42.7 451.3 64 454.5C85.3 457.7 106.7 461.3 128 457C149.3 452.7 170.7 440.3 192 436.5C213.3 432.7 234.7 437.3 256 441.5C277.3 445.7 298.7 449.3 320 451.2C341.3 453 362.7 453 384 456.2C405.3 459.3 426.7 465.7 448 463C469.3 460.3 490.7 448.7 512 446.5C533.3 444.3 554.7 451.7 576 451.5C597.3 451.3 618.7 443.7 640 443.2C661.3 442.7 682.7 449.3 704 448.2C725.3 447 746.7 438 768 441.8C789.3 445.7 810.7 462.3 832 470.7C853.3 479 874.7 479 896 478.3C917.3 477.7 938.7 476.3 949.3 475.7L960 475L960 541L949.3 541C938.7 541 917.3 541 896 541C874.7 541 853.3 541 832 541C810.7 541 789.3 541 768 541C746.7 541 725.3 541 704 541C682.7 541 661.3 541 640 541C618.7 541 597.3 541 576 541C554.7 541 533.3 541 512 541C490.7 541 469.3 541 448 541C426.7 541 405.3 541 384 541C362.7 541 341.3 541 320 541C298.7 541 277.3 541 256 541C234.7 541 213.3 541 192 541C170.7 541 149.3 541 128 541C106.7 541 85.3 541 64 541C42.7 541 21.3 541 10.7 541L0 541Z" fill="#809496"></path><path d="M0 454L10.7 456C21.3 458 42.7 462 64 465C85.3 468 106.7 470 128 472C149.3 474 170.7 476 192 471.5C213.3 467 234.7 456 256 451.3C277.3 446.7 298.7 448.3 320 455.3C341.3 462.3 362.7 474.7 384 476C405.3 477.3 426.7 467.7 448 464.5C469.3 461.3 490.7 464.7 512 469.5C533.3 474.3 554.7 480.7 576 484.5C597.3 488.3 618.7 489.7 640 487.7C661.3 485.7 682.7 480.3 704 476.2C725.3 472 746.7 469 768 471.5C789.3 474 810.7 482 832 485.7C853.3 489.3 874.7 488.7 896 485.8C917.3 483 938.7 478 949.3 475.5L960 473L960 541L949.3 541C938.7 541 917.3 541 896 541C874.7 541 853.3 541 832 541C810.7 541 789.3 541 768 541C746.7 541 725.3 541 704 541C682.7 541 661.3 541 640 541C618.7 541 597.3 541 576 541C554.7 541 533.3 541 512 541C490.7 541 469.3 541 448 541C426.7 541 405.3 541 384 541C362.7 541 341.3 541 320 541C298.7 541 277.3 541 256 541C234.7 541 213.3 541 192 541C170.7 541 149.3 541 128 541C106.7 541 85.3 541 64 541C42.7 541 21.3 541 10.7 541L0 541Z" fill="#6a7a7d"></path><path d="M0 474L10.7 474.8C21.3 475.7 42.7 477.3 64 480.3C85.3 483.3 106.7 487.7 128 487.2C149.3 486.7 170.7 481.3 192 482.3C213.3 483.3 234.7 490.7 256 493C277.3 495.3 298.7 492.7 320 491.2C341.3 489.7 362.7 489.3 384 485.3C405.3 481.3 426.7 473.7 448 476C469.3 478.3 490.7 490.7 512 490.5C533.3 490.3 554.7 477.7 576 473.2C597.3 468.7 618.7 472.3 640 473.8C661.3 475.3 682.7 474.7 704 478C725.3 481.3 746.7 488.7 768 490.5C789.3 492.3 810.7 488.7 832 486.5C853.3 484.3 874.7 483.7 896 486.8C917.3 490 938.7 497 949.3 500.5L960 504L960 541L949.3 541C938.7 541 917.3 541 896 541C874.7 541 853.3 541 832 541C810.7 541 789.3 541 768 541C746.7 541 725.3 541 704 541C682.7 541 661.3 541 640 541C618.7 541 597.3 541 576 541C554.7 541 533.3 541 512 541C490.7 541 469.3 541 448 541C426.7 541 405.3 541 384 541C362.7 541 341.3 541 320 541C298.7 541 277.3 541 256 541C234.7 541 213.3 541 192 541C170.7 541 149.3 541 128 541C106.7 541 85.3 541 64 541C42.7 541 21.3 541 10.7 541L0 541Z" fill="#546264"></path><path d="M0 499L10.7 496.7C21.3 494.3 42.7 489.7 64 487.7C85.3 485.7 106.7 486.3 128 491C149.3 495.7 170.7 504.3 192 505.5C213.3 506.7 234.7 500.3 256 495.5C277.3 490.7 298.7 487.3 320 490.5C341.3 493.7 362.7 503.3 384 505.8C405.3 508.3 426.7 503.7 448 502.5C469.3 501.3 490.7 503.7 512 501.5C533.3 499.3 554.7 492.7 576 491.8C597.3 491 618.7 496 640 500.5C661.3 505 682.7 509 704 509.8C725.3 510.7 746.7 508.3 768 503.8C789.3 499.3 810.7 492.7 832 491.5C853.3 490.3 874.7 494.7 896 498C917.3 501.3 938.7 503.7 949.3 504.8L960 506L960 541L949.3 541C938.7 541 917.3 541 896 541C874.7 541 853.3 541 832 541C810.7 541 789.3 541 768 541C746.7 541 725.3 541 704 541C682.7 541 661.3 541 640 541C618.7 541 597.3 541 576 541C554.7 541 533.3 541 512 541C490.7 541 469.3 541 448 541C426.7 541 405.3 541 384 541C362.7 541 341.3 541 320 541C298.7 541 277.3 541 256 541C234.7 541 213.3 541 192 541C170.7 541 149.3 541 128 541C106.7 541 85.3 541 64 541C42.7 541 21.3 541 10.7 541L0 541Z" fill="#404a4d"></path><path d="M0 521L10.7 519.2C21.3 517.3 42.7 513.7 64 512.8C85.3 512 106.7 514 128 516.2C149.3 518.3 170.7 520.7 192 522C213.3 523.3 234.7 523.7 256 521.8C277.3 520 298.7 516 320 514.3C341.3 512.7 362.7 513.3 384 512.7C405.3 512 426.7 510 448 509.7C469.3 509.3 490.7 510.7 512 512.2C533.3 513.7 554.7 515.3 576 515.3C597.3 515.3 618.7 513.7 640 511.3C661.3 509 682.7 506 704 508.5C725.3 511 746.7 519 768 520.5C789.3 522 810.7 517 832 516.2C853.3 515.3 874.7 518.7 896 518.8C917.3 519 938.7 516 949.3 514.5L960 513L960 541L949.3 541C938.7 541 917.3 541 896 541C874.7 541 853.3 541 832 541C810.7 541 789.3 541 768 541C746.7 541 725.3 541 704 541C682.7 541 661.3 541 640 541C618.7 541 597.3 541 576 541C554.7 541 533.3 541 512 541C490.7 541 469.3 541 448 541C426.7 541 405.3 541 384 541C362.7 541 341.3 541 320 541C298.7 541 277.3 541 256 541C234.7 541 213.3 541 192 541C170.7 541 149.3 541 128 541C106.7 541 85.3 541 64 541C42.7 541 21.3 541 10.7 541L0 541Z" fill="#2c3436"></path></svg>
export const LayeredWaves = () => {
  return (
    <image className='h-screen w-screen inset-0 absolute translate-y-1 '>
        <svg className='h-full w-full' viewBox="0 0 960 540" display="block" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        <path d="M724 540L724.2 534C724.3 528 724.7 516 728.8 504C733 492 741 480 732.2 468C723.3 456 697.7 444 686.7 432C675.7 420 679.3 408 688.3 396C697.3 384 711.7 372 718.2 360C724.7 348 723.3 336 726.5 324C729.7 312 737.3 300 745.3 288C753.3 276 761.7 264 748.7 252C735.7 240 701.3 228 689 216C676.7 204 686.3 192 696.8 180C707.3 168 718.7 156 721 144C723.3 132 716.7 120 717.8 108C719 96 728 84 735.3 72C742.7 60 748.3 48 738.7 36C729 24 704 12 691.5 6L679 0L960 0L960 6C960 12 960 24 960 36C960 48 960 60 960 72C960 84 960 96 960 108C960 120 960 132 960 144C960 156 960 168 960 180C960 192 960 204 960 216C960 228 960 240 960 252C960 264 960 276 960 288C960 300 960 312 960 324C960 336 960 348 960 360C960 372 960 384 960 396C960 408 960 420 960 432C960 444 960 456 960 468C960 480 960 492 960 504C960 516 960 528 960 534L960 540Z" fill="#c8e4e5"></path>
        <path d="M718 540L717 534C716 528 714 516 713.5 504C713 492 714 480 714.7 468C715.3 456 715.7 444 727.2 432C738.7 420 761.3 408 769.3 396C777.3 384 770.7 372 762.2 360C753.7 348 743.3 336 738 324C732.7 312 732.3 300 732.2 288C732 276 732 264 732.3 252C732.7 240 733.3 228 739 216C744.7 204 755.3 192 750.2 180C745 168 724 156 732.2 144C740.3 132 777.7 120 780.7 108C783.7 96 752.3 84 741.2 72C730 60 739 48 749.3 36C759.7 24 771.3 12 777.2 6L783 0L960 0L960 6C960 12 960 24 960 36C960 48 960 60 960 72C960 84 960 96 960 108C960 120 960 132 960 144C960 156 960 168 960 180C960 192 960 204 960 216C960 228 960 240 960 252C960 264 960 276 960 288C960 300 960 312 960 324C960 336 960 348 960 360C960 372 960 384 960 396C960 408 960 420 960 432C960 444 960 456 960 468C960 480 960 492 960 504C960 516 960 528 960 534L960 540Z" fill="#afc9ca"></path>
        <path d="M767 540L773.5 534C780 528 793 516 800.3 504C807.7 492 809.3 480 812.3 468C815.3 456 819.7 444 811.5 432C803.3 420 782.7 408 770.3 396C758 384 754 372 766.7 360C779.3 348 808.7 336 813.7 324C818.7 312 799.3 300 787.5 288C775.7 276 771.3 264 764.7 252C758 240 749 228 745.3 216C741.7 204 743.3 192 743.7 180C744 168 743 156 755.7 144C768.3 132 794.7 120 801.2 108C807.7 96 794.3 84 786.7 72C779 60 777 48 769.7 36C762.3 24 749.7 12 743.3 6L737 0L960 0L960 6C960 12 960 24 960 36C960 48 960 60 960 72C960 84 960 96 960 108C960 120 960 132 960 144C960 156 960 168 960 180C960 192 960 204 960 216C960 228 960 240 960 252C960 264 960 276 960 288C960 300 960 312 960 324C960 336 960 348 960 360C960 372 960 384 960 396C960 408 960 420 960 432C960 444 960 456 960 468C960 480 960 492 960 504C960 516 960 528 960 534L960 540Z" fill="#98aeaf"></path>
        <path d="M796 540L798.2 534C800.3 528 804.7 516 810.2 504C815.7 492 822.3 480 814.7 468C807 456 785 444 778.3 432C771.7 420 780.3 408 787.8 396C795.3 384 801.7 372 804.7 360C807.7 348 807.3 336 812.8 324C818.3 312 829.7 300 825 288C820.3 276 799.7 264 796 252C792.3 240 805.7 228 805.3 216C805 204 791 192 790 180C789 168 801 156 799 144C797 132 781 120 788 108C795 96 825 84 840 72C855 60 855 48 853.7 36C852.3 24 849.7 12 848.3 6L847 0L960 0L960 6C960 12 960 24 960 36C960 48 960 60 960 72C960 84 960 96 960 108C960 120 960 132 960 144C960 156 960 168 960 180C960 192 960 204 960 216C960 228 960 240 960 252C960 264 960 276 960 288C960 300 960 312 960 324C960 336 960 348 960 360C960 372 960 384 960 396C960 408 960 420 960 432C960 444 960 456 960 468C960 480 960 492 960 504C960 516 960 528 960 534L960 540Z" fill="#809496"></path>
        <path d="M811 540L814.5 534C818 528 825 516 830.2 504C835.3 492 838.7 480 842 468C845.3 456 848.7 444 840.5 432C832.3 420 812.7 408 804.3 396C796 384 799 372 811.5 360C824 348 846 336 848.7 324C851.3 312 834.7 300 829.2 288C823.7 276 829.3 264 837.7 252C846 240 857 228 863.7 216C870.3 204 872.7 192 869.2 180C865.7 168 856.3 156 849.2 144C842 132 837 120 841.5 108C846 96 860 84 866.3 72C872.7 60 871.3 48 866.3 36C861.3 24 852.7 12 848.3 6L844 0L960 0L960 6C960 12 960 24 960 36C960 48 960 60 960 72C960 84 960 96 960 108C960 120 960 132 960 144C960 156 960 168 960 180C960 192 960 204 960 216C960 228 960 240 960 252C960 264 960 276 960 288C960 300 960 312 960 324C960 336 960 348 960 360C960 372 960 384 960 396C960 408 960 420 960 432C960 444 960 456 960 468C960 480 960 492 960 504C960 516 960 528 960 534L960 540Z" fill="#6a7a7d"></path>
        <path d="M846 540L847.5 534C849 528 852 516 857.3 504C862.7 492 870.3 480 869.3 468C868.3 456 858.7 444 860.3 432C862 420 875 408 879 396C883 384 878 372 875.5 360C873 348 873 336 866 324C859 312 845 300 849 288C853 276 875 264 874.8 252C874.7 240 852.3 228 844.3 216C836.3 204 842.7 192 845.3 180C848 168 847 156 852.8 144C858.7 132 871.3 120 874.5 108C877.7 96 871.3 84 867.5 72C863.7 60 862.3 48 867.8 36C873.3 24 885.7 12 891.8 6L898 0L960 0L960 6C960 12 960 24 960 36C960 48 960 60 960 72C960 84 960 96 960 108C960 120 960 132 960 144C960 156 960 168 960 180C960 192 960 204 960 216C960 228 960 240 960 252C960 264 960 276 960 288C960 300 960 312 960 324C960 336 960 348 960 360C960 372 960 384 960 396C960 408 960 420 960 432C960 444 960 456 960 468C960 480 960 492 960 504C960 516 960 528 960 534L960 540Z" fill="#546264"></path>
        <path d="M890 540L885.8 534C881.7 528 873.3 516 869.8 504C866.3 492 867.7 480 876 468C884.3 456 899.7 444 901.7 432C903.7 420 892.3 408 883.8 396C875.3 384 869.7 372 875.5 360C881.3 348 898.7 336 902.8 324C907 312 898 300 895.7 288C893.3 276 897.7 264 894 252C890.3 240 878.7 228 877.3 216C876 204 885 192 893 180C901 168 908 156 909.5 144C911 132 907 120 899 108C891 96 879 84 876.8 72C874.7 60 882.3 48 888.2 36C894 24 898 12 900 6L902 0L960 0L960 6C960 12 960 24 960 36C960 48 960 60 960 72C960 84 960 96 960 108C960 120 960 132 960 144C960 156 960 168 960 180C960 192 960 204 960 216C960 228 960 240 960 252C960 264 960 276 960 288C960 300 960 312 960 324C960 336 960 348 960 360C960 372 960 384 960 396C960 408 960 420 960 432C960 444 960 456 960 468C960 480 960 492 960 504C960 516 960 528 960 534L960 540Z" fill="#404a4d"></path>
        <path d="M929 540L925.7 534C922.3 528 915.7 516 914.3 504C913 492 917 480 920.8 468C924.7 456 928.3 444 930.7 432C933 420 934 408 930.7 396C927.3 384 919.7 372 916.5 360C913.3 348 914.7 336 913.7 324C912.7 312 909.3 300 908.8 288C908.3 276 910.7 264 913.2 252C915.7 240 918.3 228 918.3 216C918.3 204 915.7 192 911.8 180C908 168 903 156 907.3 144C911.7 132 925.3 120 927.8 108C930.3 96 921.7 84 920.3 72C919 60 925 48 925.3 36C925.7 24 920.3 12 917.7 6L915 0L960 0L960 6C960 12 960 24 960 36C960 48 960 60 960 72C960 84 960 96 960 108C960 120 960 132 960 144C960 156 960 168 960 180C960 192 960 204 960 216C960 228 960 240 960 252C960 264 960 276 960 288C960 300 960 312 960 324C960 336 960 348 960 360C960 372 960 384 960 396C960 408 960 420 960 432C960 444 960 456 960 468C960 480 960 492 960 504C960 516 960 528 960 534L960 540Z" fill="#2c3436"></path>
        </svg>
   
    </image>
  )
}
