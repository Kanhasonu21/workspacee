import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { saveAs } from 'file-saver';
import{AuthGuard} from 'src/auth/auth.guard'
@Component({
  selector: 'app-uploaddownloadfile',
  templateUrl: './uploaddownloadfile.component.html',
  styleUrls: ['./uploaddownloadfile.component.css']
})
export class UploaddownloadfileComponent implements OnInit {
  attachmentList: any = [];
  fileToUpload: File = null;
  fileUrl;
  button='Download Timesheet'
  isSubmitted=false
  loading=false
 

  constructor(public homeService: HomeService, private authService:AuthGuard ) { }

  ngOnInit() {
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.homeService.postFile(this.fileToUpload).subscribe(data => {
      this.attachmentList.push(data);
      this.isSubmitted=true;
      alert(`data submitted !`)
    }, error => {
      alert(`Data not submitted`)
      console.log(error);
    });
  }
  data: any[]
  //download uploaded file
  download() {
    var filename = this.attachmentList[0].fileName;
    this.homeService.downloadFile(filename)
      .subscribe(
        data => saveAs(data, filename),
        error => console.log(`File not downloaded, something wrong with server`, error)
      )

  }
   //downloading timesheet excel
   downloadExcel() {


    this.loading=true
    this.button = 'Downloading';
    this.homeService.downloadExcelFile().subscribe(res => {
      saveAs(res, 'Timesheet.xlsx',
        { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        this.button = 'Download';
       
       
    },error=>{
      setTimeout(() => {
        alert(`Server is not responding`)
        this.loading=false
      }, 10000);

    }
    )
  }
}
